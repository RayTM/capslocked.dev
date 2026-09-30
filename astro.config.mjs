import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkTerminal from './src/plugins/remark-terminal.mjs';
import remarkExternalLinks from './src/plugins/remark-external-links.mjs';

export default defineConfig({
  site: 'https://www.capslocked.dev',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de' },
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkTerminal, remarkExternalLinks],
  },
});
