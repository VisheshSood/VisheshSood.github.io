// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: `site` is the canonical production URL. It drives canonical links,
// Open Graph URLs and the generated sitemap. Change this ONE line if the final
// domain differs.
const SITE = 'https://www.innovativegloves.net';

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Keep placeholder /news sample pages out of the sitemap until real articles exist.
      filter: (page) => !page.includes('/news'),
      // lastmod = build time. Every deploy rebuilds, so this honestly signals the
      // site was refreshed and prompts search engines to re-crawl.
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
      // Rank the pages that matter most. (Bing and others use these; Google mostly
      // ignores priority/changefreq but honours lastmod.)
      serialize(item) {
        const path = item.url.replace(SITE, '');
        if (path === '/') item.priority = 1.0;
        else if (path.startsWith('/technologies')) item.priority = 0.9;
        else if (path.startsWith('/gloves')) item.priority = 0.8;
        else if (path.startsWith('/industries')) item.priority = 0.7;
        else if (path.startsWith('/request') || path === '/contact/') item.priority = 0.8;
        return item;
      },
    }),
  ],
});
