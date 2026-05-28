import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkTerminal from './src/plugins/remark-terminal.mjs';
import remarkExternalLinks from './src/plugins/remark-external-links.mjs';

export default defineConfig({
  site: 'https://capslocked.dev',
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [remarkTerminal, remarkExternalLinks],
  },
});
