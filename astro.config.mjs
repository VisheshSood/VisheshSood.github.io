// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// After the build, add the trailing slash to internal links that point at a page
// (/gloves -> /gloves/), so a click never costs a 301 hop. Only rewrites a link when
// <dist>/<path>/index.html exists; files, anchors and external links are untouched.
const trailingSlashLinks = {
  name: 'ig-trailing-slash-links',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []));
      let changed = 0;
      for (const file of walk(root)) {
        const src = fs.readFileSync(file, 'utf8');
        const out = src.replace(/(href=")(\/[^"?#]*[^"/?#])([?#][^"]*)?"/g, (m, a, p, rest = '') => {
          if (path.extname(p)) return m;
          if (!fs.existsSync(path.join(root, p, 'index.html'))) return m;
          changed++;
          return `${a}${p}/${rest}"`;
        });
        if (out !== src) fs.writeFileSync(file, out);
      }
      console.log(`[ig-trailing-slash-links] ${changed} internal links normalised`);
    },
  },
};

// IMPORTANT: `site` is the canonical production URL. It drives canonical links,
// Open Graph URLs and the generated sitemap. Change this ONE line if the final
// domain differs.
const SITE = 'https://www.innovativegloves.net';

export default defineConfig({
  site: SITE,
  // Allow the local reverse-proxy hostnames (Caddy -> localhost:4321) through
  // Vite's dev-server host check, so http://website/ and http://website.local/ work.
  vite: {
    server: {
      allowedHosts: ['website', 'website.local'],
    },
  },
  integrations: [
    trailingSlashLinks,
    sitemap({
      // The private 3D share page stays out of the sitemap.
      filter: (page) => !page.includes('/3d/silverlined'),
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
