## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## This project

Portfolio + services site for a senior technical writer. See README.md for the file map.

- Content lives in Markdown collections (`src/content/`) and small TS data files (`src/data/`); pages under `src/pages/` should stay thin.
- Design is deliberately minimal: system font stack, one accent color (`--color-accent` in `src/styles/global.css`), light/dark via `prefers-color-scheme`, no client-side JS unless there is a clear need.
- Never put a phone number or email address on any page. Contact goes through the links in `SOCIAL` (`src/consts.ts`).
- `draft: true` posts render in `astro dev` but are excluded from production builds and RSS.
- Astro 7 uses a strict HTML compiler: close every tag, and use `{' '}` between adjacent inline elements where a space is needed.
