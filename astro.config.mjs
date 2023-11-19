import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'

const markdownConfig = {
  drafts: true,
  shikiConfig: {
    theme: 'one-dark-pro'
  },
  remarkRehype: {
    footnoteLabel: 'Nota al pie',
    footnoteBackLabel: 'Volver'
  }
}

export default defineConfig({
  site: 'https://alextorresdev.github.io',
  markdown: markdownConfig,
  integrations: [sitemap(), tailwind(), preact(), mdx(markdownConfig)]
})
