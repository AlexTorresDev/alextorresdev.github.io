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
  icons: [
    {
      src: '/favicon.svg',
      sizes: '192x192',
      type: 'image/svg'
    },
    {
      src: '/favicon.svg',
      sizes: '512x512',
      type: 'image/svg'
    },
    {
      src: '/favicon.svg',
      sizes: '512x512',
      type: 'image/svg',
      purpose: 'any maskable'
    }
  ]
}