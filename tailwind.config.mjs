/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'central': {
					'50': '#f4f3ff',
					'100': '#ebe8ff',
					'200': '#d8d5ff',
					'300': '#bcb3ff',
					'400': '#a291fd', // base
					'500': '#7a58fa',
					'600': '#6935f2',
					'700': '#5a23de',
					'800': '#4b1dba',
					'900': '#3f1a98',
					'950': '#250e67',
				},
				primario: '#050505',
				secundario: '#101010',
				terciario: '#191919',
				cuaternario: '#282828',
				bgHover: '#1F1F1F'
			},

			screens: {
				'md': '810px',
			}
		},
	},
	plugins: [],
}
