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
        // Ness Design System - Paleta Completa
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#3d4759',
          700: '#2d3544',
          800: '#1e293b',
          850: '#1a1f28',
          900: '#0f172a',
          950: '#0a0d14',
        },
        blue: {
          // Variações do azul primário
          light: '#4dc2ff',    // Versão light (raramente usado)
          400: '#1ab0ff',      // Hover state (light)
          500: '#00ade8',      // COR PRINCIPAL DA MARCA
          600: '#008bb8',      // Pressed/active state
          dark: '#006988',     // Versão dark (raramente usado)
          hover: '#33BEE6',    // Hover em dark mode
        },
        primary: {
          // Aliases para consistência
          DEFAULT: '#00ade8',
          50: 'rgba(0, 173, 232, 0.05)',   // Background hover
          100: 'rgba(0, 173, 232, 0.10)',  // Background active
          200: 'rgba(0, 173, 232, 0.15)',  // Bordas sutis
          300: 'rgba(0, 173, 232, 0.20)',
          400: '#1ab0ff',      // Hover state (light)
          500: '#00ade8',      // Cor principal
          600: '#008bb8',      // Pressed/active
          700: '#006988',      // Dark variant
          dark: '#33BEE6',     // Dark mode
        },
        // Cores de sistema
        destructive: {
          DEFAULT: '#EF4444',  // Light mode
          dark: '#F87171',     // Dark mode
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00ade8 0%, #008bb8 100%)',
        'gradient-primary-soft': 'linear-gradient(135deg, #1ab0ff 0%, #00ade8 50%, #008bb8 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config

