import { defineConfig } from 'astro/config'

// Astro integration imports
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import { VitePWA } from 'vite-plugin-pwa'

// Helper imports
import { manifest, seoConfig } from './utils/seoConfig'

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
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  },
  site: seoConfig.baseURL,
  markdown: markdownConfig,
  integrations: [
    sitemap(),
    tailwind(),
    preact(),
    mdx(markdownConfig)
  ],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest,
        workbox: {
          globDirectory: 'dist',
          globPatterns: [
            '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'
          ],
          navigateFallback: null
        }
      })
    ]
  }
})
