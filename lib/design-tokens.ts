/**
 * Professional Design System Tokens
 * Ness Design System - Complete Token System
 */

export const designTokens = {
  // Colors - Primary Palette
  colors: {
    // Ness Brand
    primary: {
      50: '#e6f7fd',
      100: '#b3e7f9',
      200: '#80d7f5',
      300: '#4dc7f1',
      400: '#1ab7ed',
      500: '#00ade8', // Main brand color
      600: '#0097c7',
      700: '#0081a6',
      800: '#006b85',
      900: '#005564',
    },

    // Neutrals - Enhanced Scale
    neutral: {
      0: '#ffffff',
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      850: '#1a1a1a',
      900: '#171717',
      950: '#0a0a0a',
      1000: '#000000',
    },

    // Semantic Colors
    success: {
      light: '#10b981',
      main: '#059669',
      dark: '#047857',
      bg: 'rgba(16, 185, 129, 0.1)',
    },

    warning: {
      light: '#fbbf24',
      main: '#f59e0b',
      dark: '#d97706',
      bg: 'rgba(251, 191, 36, 0.1)',
    },

    danger: {
      light: '#f87171',
      main: '#ef4444',
      dark: '#dc2626',
      bg: 'rgba(239, 68, 68, 0.1)',
    },

    info: {
      light: '#60a5fa',
      main: '#3b82f6',
      dark: '#2563eb',
      bg: 'rgba(59, 130, 246, 0.1)',
    },

    // Background System
    background: {
      primary: '#0a0a0a',
      secondary: '#171717',
      tertiary: '#262626',
      elevated: '#1a1a1a',
      overlay: 'rgba(0, 0, 0, 0.8)',
    },

    // Text System
    text: {
      primary: '#fafafa',
      secondary: '#d4d4d4',
      tertiary: '#a3a3a3',
      disabled: '#525252',
      inverse: '#0a0a0a',
    },

    // Border System
    border: {
      light: '#404040',
      main: '#262626',
      dark: '#171717',
      focus: '#00ade8',
    },
  },

  // Typography Scale
  typography: {
    fontFamily: {
      sans: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      display: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: 'JetBrains Mono, Consolas, Monaco, "Courier New", monospace',
    },

    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
      '8xl': '6rem',      // 96px
      '9xl': '8rem',      // 128px
    },

    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // Spacing Scale (4px base unit)
  spacing: {
    0: '0',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    2.5: '0.625rem',  // 10px
    3: '0.75rem',     // 12px
    3.5: '0.875rem',  // 14px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    7: '1.75rem',     // 28px
    8: '2rem',        // 32px
    9: '2.25rem',     // 36px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    14: '3.5rem',     // 56px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    32: '8rem',       // 128px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',
  },

  // Shadows
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '2xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    glow: '0 0 20px rgba(0, 173, 232, 0.3)',
    glowLg: '0 0 40px rgba(0, 173, 232, 0.4)',
  },

  // Transitions
  transitions: {
    duration: {
      fastest: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      slower: '700ms',
    },

    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  },

  // Z-Index Scale
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },

  // Breakpoints
  breakpoints: {
    xs: '375px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Component Specific Tokens
  components: {
    card: {
      padding: {
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
      background: 'rgba(26, 26, 26, 0.6)',
      border: '1px solid rgba(64, 64, 64, 0.5)',
      borderRadius: '1rem',
      backdropBlur: 'blur(12px)',
    },

    button: {
      height: {
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
      },
      padding: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem',
      },
    },

    input: {
      height: {
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
      },
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
    },
  },
} as const

// Type exports for TypeScript
export type DesignTokens = typeof designTokens
export type ColorScale = keyof typeof designTokens.colors
export type SpacingScale = keyof typeof designTokens.spacing
export type FontSize = keyof typeof designTokens.typography.fontSize
