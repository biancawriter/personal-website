/**
 * Generates the social preview image and favicons from the source files in
 * this folder and public/. Run it after changing the name, tagline, photo, or
 * favicon.svg:
 *
 *   npm run images
 *
 * Writes public/og.png, public/favicon.ico, and public/apple-touch-icon.png.
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (f) => path.join(root, 'public', f);

const ACCENT = '#006bbb';
const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

// -- Favicons ----------------------------------------------------------------

const svg = fs.readFileSync(pub('favicon.svg'));

await sharp(svg).resize(180, 180).png().toFile(pub('apple-touch-icon.png'));

// ICO container holding PNG entries at 16 and 32 px. Modern browsers and Windows Vista+ read this.
const sizes = [16, 32];
const pngs = await Promise.all(sizes.map((n) => sharp(svg).resize(n, n).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * pngs.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
let offset = header.length;
pngs.forEach((png, i) => {
  const e = 6 + i * 16;
  header.writeUInt8(sizes[i], e);
  header.writeUInt8(sizes[i], e + 1);
  header.writeUInt8(0, e + 2);
  header.writeUInt8(0, e + 3);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(png.length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += png.length;
});
fs.writeFileSync(pub('favicon.ico'), Buffer.concat([header, ...pngs]));

// -- Open Graph image (1200 x 630) ------------------------------------------

const W = 1200;
const H = 630;
const PHOTO = 340;
const MARGIN = 90;

const photo = await sharp(pub('bianca-ragsdale.jpeg')).resize(PHOTO, PHOTO).png().toBuffer();
const mask = Buffer.from(
  `<svg width="${PHOTO}" height="${PHOTO}"><rect width="${PHOTO}" height="${PHOTO}" rx="24" fill="#fff"/></svg>`,
);
const photoRounded = await sharp(photo).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();

const text = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <style>
    .name { font-family: ${FONT}; font-size: 72px; font-weight: 700; fill: #18181b; letter-spacing: -2px; }
    .tag  { font-family: ${FONT}; font-size: 34px; font-weight: 400; fill: #52525b; }
    .url  { font-family: ${FONT}; font-size: 26px; font-weight: 500; fill: ${ACCENT}; }
  </style>
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="0" y="0" width="${W}" height="10" fill="${ACCENT}"/>
  <text x="${MARGIN}" y="250" class="name">Bianca Ragsdale</text>
  <text x="${MARGIN}" y="318" class="tag">Senior technical writer</text>
  <text x="${MARGIN}" y="378" class="tag">Developer docs, docs-as-code, and</text>
  <text x="${MARGIN}" y="424" class="tag">AI-assisted documentation workflows</text>
  <text x="${MARGIN}" y="540" class="url">www.biancaragsdale.com</text>
</svg>`);

await sharp({ create: { width: W, height: H, channels: 4, background: '#ffffff' } })
  .composite([
    { input: text, top: 0, left: 0 },
    { input: photoRounded, top: Math.round((H - PHOTO) / 2), left: W - PHOTO - MARGIN },
  ])
  .png()
  .toFile(pub('og.png'));

console.log('Wrote public/og.png, public/favicon.ico, public/apple-touch-icon.png');
