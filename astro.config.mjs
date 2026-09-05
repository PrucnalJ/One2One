import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production values. The GitHub Pages preview workflow (.github/workflows/pages.yml)
// overrides both so the site can be served from https://prucnalj.github.io/One2One/.
const site = process.env.SITE_URL ?? 'https://one2oneadvisor.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|subscribed|privacy)\/$/.test(page),
    }),
  ],
});
