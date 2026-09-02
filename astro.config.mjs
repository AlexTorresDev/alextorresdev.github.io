// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import preact from '@astrojs/preact'
import { VitePWA } from 'vite-plugin-pwa'
import { manifest, seoConfig } from './utils/seoConfig'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
	},
	site: seoConfig.baseURL,
	integrations: [sitemap(), preact()],
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
			}),
			tailwindcss()
		]
	}
})
