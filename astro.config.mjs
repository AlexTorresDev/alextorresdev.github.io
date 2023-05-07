import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

const markdownConfig = {
  drafts: true,
  shikiConfig: { theme: 'one-dark-pro' },
  remarkRehype: { footnoteLabel: 'Nota al pie', footnoteBackLabel: 'Volver' },
}

// https://astro.build/config
export default defineConfig({
  site: 'https://alextrs.dev',
  markdown: markdownConfig,
  integrations: [
    sitemap(),
    tailwind(),
    mdx(markdownConfig),
    image(
      {
        serviceEntryPoint: '@astrojs/image/sharp',
        cacheDir: "./.cache/image",
        logLevel: 'debug',
      }
    )
  ]
});