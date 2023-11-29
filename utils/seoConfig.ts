import type { ManifestOptions } from 'vite-plugin-pwa'

export const seoConfig = {
  baseURL: 'https://alextorresdev.github.io',
  description: 'Alex Torres es un desarrollador web que le encanta crear aplicaciones web y móviles.',
  type: 'website',
  image: {
    url: '/social_img.webp',
    alt: 'Alex Torres, Desarrollador',
    width: 1200,
    height: 630
  },
  siteName: 'Alex Torres Dev',
  twitter: {
    card: 'summary_large_image'
  }
}

export const manifest: Partial<ManifestOptions> = {
  name: 'Alex Torres Dev',
  short_name: 'Alex Torres Dev',
  description: 'Alex Torres es un desarrollador web que le encanta crear aplicaciones web y móviles.',
  theme_color: '#10b981',
  background_color: '#171717',
  display: 'minimal-ui',
  lang: 'es',
  icons: [
    {
      src: '/images/favicon_192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/images/favicon_512x512.png',
      sizes: '512x512',
      type: 'image/png'
    },
    {
      src: '/images/favicon_512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ]
}