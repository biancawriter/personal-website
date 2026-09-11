// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for the sitemap, RSS feed, and canonical URLs.
  site: 'https://www.biancaragsdale.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
