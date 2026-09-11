# personal-website

Portfolio and professional-services site for Bianca Ragsdale, built with [Astro](https://astro.build) and Tailwind CSS.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

Requires Node 22.12+.

## Where things live

| Path | What |
|---|---|
| `src/consts.ts` | Site title, nav items, social links |
| `src/data/services.ts`, `src/data/resources.ts` | Copy for the Services and Resources pages |
| `src/content/blog/*.md` | Blog posts. Filename = URL slug. Set `draft: true` to hide from production. |
| `src/content/work/*.md` | Portfolio entries (one file per project) |
| `src/content.config.ts` | Frontmatter schemas for the collections above |
| `src/pages/` | One file per route |
| `src/layouts/BaseLayout.astro` | `<head>`, header, footer |
| `src/styles/global.css` | Tailwind import, design tokens (accent color, fonts) |
| `public/` | Static files served as-is (favicon, photo, résumé PDF and Markdown) |

## Deploy

Pushes to `main` build and publish via `.github/workflows/deploy.yml` to GitHub Pages at https://www.biancaragsdale.com.

DNS is at Porkbun: a `CNAME` record for `www` pointing to `biancawriter.github.io`, and `A` records on the apex pointing to GitHub Pages' IPs so `biancaragsdale.com` redirects to `www`. The custom domain is set in the repo's Settings → Pages.
