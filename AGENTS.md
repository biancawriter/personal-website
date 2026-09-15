## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Restart the dev server after editing `src/content.config.ts`. It does not reliably pick up schema changes, and a stale schema makes a collection render as empty.

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

Portfolio and services site for a senior technical writer. See README.md for the file map.

- Content lives in Markdown collections (`src/content/`) and small TS data files (`src/data/`); pages under `src/pages/` should stay thin.
- Design is deliberately minimal: system font stack, one accent color (`--color-accent` in `src/styles/global.css`), no client-side JS unless there is a clear need.
- Dark mode is an `html.dark` class (Tailwind `@custom-variant dark`), set before paint by an inline script in `BaseLayout.astro`. `ThemeToggle.astro` is a three-way light/dark/system switch; the preference is `html[data-theme]`, persisted in `localStorage.theme` (absent = system).
- Never put a phone number, email address, or mailing address on any page. Contact goes through the links in `SOCIAL` (`src/consts.ts`).
- `draft: true` posts render in `astro dev` but are excluded from production builds and RSS.
- `SHOW_WRITING` in `src/consts.ts` hides the whole Writing section (nav item, home-page list, RSS links, sitemap entries) while there are no posts. The pages stay in the repo.
- Astro 7 uses a strict HTML compiler: close every tag, and use `{' '}` between adjacent inline elements where a space is needed.

## Language and Writing Style
- Use complete sentences. 
- Sentences should be concise and every word should have a reason for being there.
- Do not use em dashes or semicolons. 
- Avoid "marketing fluff".
- Use active voice unless passive voice makes it easier for the reader to understand the sentence.
- The reader’s first language might not be English, so avoid idioms. Use language and syntax that is easy to follow.
- Use title case for all headings.
