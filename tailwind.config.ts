import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'dark-gray': 'var(--dark-gray)',
        blue: 'var(--blue)',
        'light-blue': 'var(--light-blue)',
        'light-blue2': 'var(--light-blue2)',
      },
    },
  },
  plugins: [],
} satisfies Config
