/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['media', '[data-theme="dark"]'],
	theme: {
		extend: {
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["[data-theme=light]"],
					"primary": "#10b981",
					"secondary": "#3b82f6",
					"accent": "#06b6d4",
					"base-100": "#fafafa",
					"base-200": "#f2f2f2",
					"base-300": "#e5e5e5",
				},
				dark: {
					...require("daisyui/src/theming/themes")["[data-theme=forest]"],
					"primary": "#10b981",
					"secondary": "#3b82f6",
					"accent": "#06b6d4",
					'base-100': '#212121',
					'base-200': '#1e1e1e',
					'base-300': '#1b1b1b',
				},
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
