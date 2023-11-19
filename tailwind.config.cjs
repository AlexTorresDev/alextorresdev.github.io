/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: ['class'],
  theme: {
    colors: {
      primary: colors.emerald,
      neutral: colors.neutral
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography')
  ]
}
