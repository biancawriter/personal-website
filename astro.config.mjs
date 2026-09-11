// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real domain once purchased (used for sitemap, RSS, and canonical URLs).
  site: 'https://biancawriter.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
