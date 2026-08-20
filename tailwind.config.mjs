/** @type {import('tailwindcss').Config} */
export default {
  // .mjs included so classes emitted by the remark plugins in src/plugins are scanned
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,mjs,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* Theme-aware colors via CSS custom properties */
        'background': 'var(--c-background)',
        'on-background': 'var(--c-on-background)',
        'primary': 'var(--c-primary)',
        'secondary': 'var(--c-secondary)',
        'secondary-container': 'var(--c-secondary-container)',
        'on-secondary': 'var(--c-on-secondary)',
        'on-secondary-container': 'var(--c-on-secondary-container)',
        'on-surface-variant': 'var(--c-on-surface-variant)',
        'outline': 'var(--c-outline)',
        'outline-variant': 'var(--c-outline-variant)',
        'surface-container-low': 'var(--c-surface-container-low)',
        'surface-container-highest': 'var(--c-surface-container-highest)',
        'surface-container': 'var(--c-surface-container)',
        'primary-fixed': 'var(--c-primary-fixed)',

        /* Unused in templates — kept for reference */
        'tertiary-container': '#e3e2e2',
        'error': '#ffb4ab',
        'surface': '#131313',
        'on-surface': '#e2e2e2',
      },
      borderWidth: {
        'thin': '1px',
        'thick': '3px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        base: '4px',
        xl: '80px',
        md: '24px',
        lg: '48px',
      },
      fontFamily: {
        'body-lg': ['Geist Variable', 'Geist', 'sans-serif'],
        'headline-lg': ['JetBrains Mono Variable', 'JetBrains Mono', 'monospace'],
        'body-md': ['Geist Variable', 'Geist', 'sans-serif'],
        'label-sm': ['JetBrains Mono Variable', 'JetBrains Mono', 'monospace'],
        'label-md': ['JetBrains Mono Variable', 'JetBrains Mono', 'monospace'],
        'headline-md': ['JetBrains Mono Variable', 'JetBrains Mono', 'monospace'],
        'headline-xl': ['JetBrains Mono Variable', 'JetBrains Mono', 'monospace'],
        'headline-sm': ['JetBrains Mono Variable', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-lg': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1.2', fontWeight: '500' }],
        'label-md': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'headline-md': ['24px', { lineHeight: '1.2', letterSpacing: '0em', fontWeight: '700' }],
        'headline-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '800' }],
        'headline-sm': ['20px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};
