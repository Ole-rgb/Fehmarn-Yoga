/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ["'Montserrat Variable'"]
			}
		},
		colors: {
			white: '#ffffff',
			grey: "#D9D9D9"
		}
	},
	plugins: [],
}
