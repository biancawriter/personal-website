# personal-website

Portfolio and professional-services site for Bianca Ragsdale, built with [Astro](https://astro.build) and Tailwind CSS.

## Develop

```sh
npm install
npm run dev        # start the dev server at http://localhost:4321 (Ctrl+C to stop)
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

To keep the dev server running without holding the terminal, start it in the background:

```sh
npx astro dev --background   # start
npx astro dev status         # check whether it is running
npx astro dev stop           # stop
```

Requires Node 22.12+.

## Images

`public/og.png` (the social preview card), `public/favicon.ico`, and `public/apple-touch-icon.png` are generated files. After changing the name, tagline, photo, or `public/favicon.svg`, regenerate them:

```sh
npm run images
```

The script is `scripts/og-image.mjs`.

## Where things live

| Path | What |
|---|---|
| `src/consts.ts` | Site title, nav items, social links, and the `SHOW_WRITING` flag that hides the blog until there are posts |
| `src/data/services.ts`, `src/data/resources.ts` | Copy for the Services and Resources pages |
| `src/content/blog/*.md` | Blog posts. Filename = URL slug. Set `draft: true` to hide from production. |
| `src/content/work/*.md` | Portfolio entries (one file per project) |
| `src/content.config.ts` | Frontmatter schemas for the collections above |
| `src/pages/` | One file per route |
| `src/layouts/BaseLayout.astro` | `<head>`, header, footer |
| `src/styles/global.css` | Tailwind import, design tokens (accent color, fonts) |
| `public/` | Static files served as-is (favicons, `og.png` social preview, photo, résumé PDF and Markdown) |

## Deploy

Pushes to `main` build and publish via `.github/workflows/deploy.yml` to GitHub Pages at https://www.biancaragsdale.com.

DNS is at Porkbun: a `CNAME` record for `www` pointing to `biancawriter.github.io`, and `A` records on the apex pointing to GitHub Pages' IPs so `biancaragsdale.com` redirects to `www`. The custom domain is set in the repo's Settings → Pages.
