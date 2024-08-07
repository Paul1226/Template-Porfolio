/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				"loop": {
					"100%": { transform: "translateX(calc(-50% - var(--extra-width)))" }
				},
				"loop-reverse": {
					"0%": { transform: "translateX(calc(-50% - var(--extra-width)))" },
					"100%": { transform: "translateX(0)" }
				},
				"loop-vertical": {
					"100%": { transform: "translateY(calc(-50% - var(--extra-height)))" }
				}
			},
			animation: {
				"loop": "loop linear infinite",
				"loop-reverse": "loop-reverse linear infinite",
				"loop-vertical": "loop-vertical linear infinite",
			},
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
				smoke: {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#1f1f1f',
					'500': '#282828',
					'600': '#252525',
					'700': '#191919',
					'800': '#161616',
					'900': '#101010',
					'950': '#050505',
				},


			},

			screens: {
				'md': '810px',
				'2xl': '1440px',
			}
		},
	},
	plugins: [],
}
