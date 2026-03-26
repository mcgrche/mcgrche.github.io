/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				warm: {
					"primary": "#0F6E56",
					"primary-content": "#ffffff",
					"secondary": "#BA7517",
					"secondary-content": "#ffffff",
					"accent": "#3B6D11",
					"accent-content": "#ffffff",
					"neutral": "#2C2C2A",
					"neutral-content": "#FAFAF8",
					"base-100": "#FFFFFF",
					"base-200": "#F5F3EF",
					"base-300": "#E8E5DF",
					"base-content": "#2C2C2A",
					"info": "#185FA5",
					"info-content": "#ffffff",
					"success": "#0F6E56",
					"success-content": "#ffffff",
					"warning": "#BA7517",
					"warning-content": "#ffffff",
					"error": "#A32D2D",
					"error-content": "#ffffff",
				},
			},
			"dark",
		],
		darkTheme: "dark",
		logs: false,
	}
}
