// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SHOW_WRITING } from './src/consts';

// https://astro.build/config
export default defineConfig({
  // Used for the sitemap, RSS feed, and canonical URLs.
  site: 'https://www.biancaragsdale.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      // Keep the unlisted Writing pages out of the sitemap until there are posts.
      filter: (page) => SHOW_WRITING || !page.includes('/writing/'),
    }),
  ],
});
