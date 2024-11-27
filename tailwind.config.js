/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class", // Enables dark mode using the 'class' strategy
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx,js,jsx}", // Scans these files for Tailwind classes
	],
	theme: {
		extend: {
			// Border radius extensions
			borderRadius: {
				lg: 'var(--radius)', // Large radius
				md: 'calc(var(--radius) - 2px)', // Medium radius
				sm: 'calc(var(--radius) - 4px)', // Small radius
			},
			// Custom color palette
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
				},
			},
			// Custom spacing values
			spacing: {
				18: '4.5rem',
				22: '5.5rem',
			},
			// Font family settings
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			// Custom animations and keyframes
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
				slideIn: 'slideIn 0.5s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideIn: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"), // Animations plugin
		require("@tailwindcss/typography"), // Typography plugin
		require("@tailwindcss/forms"), // Forms plugin
	],
};
