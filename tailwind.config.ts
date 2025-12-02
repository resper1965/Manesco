import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0a0d14',
          900: '#0f1419',
          850: '#1a1f28',
          800: '#1e2433',
        },
        blue: {
          500: '#00ade8',
          400: '#1ab0ff',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config

