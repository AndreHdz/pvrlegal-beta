/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'alt' : '#d9f2ff',
			'alt3' : '#1a4979',
			'alt4' : '#389ecc',
			'alt5' : '#223448',
			'alt6' : '#3e6382',
			'alt7' : '#24343f',
			'white' : '#fff',
			'grey' : '#3B3A3E'
		},
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
