// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: `site` is the canonical production URL. It drives canonical links,
// Open Graph URLs and the generated sitemap. Change this ONE line if the final
// domain differs from www.innovativeglove.com.
export default defineConfig({
  site: 'https://www.innovativeglove.com',
  // Keep placeholder /news sample pages out of the sitemap until real articles exist.
  integrations: [sitemap({ filter: (page) => !page.includes('/news') })],
});
