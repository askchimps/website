import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        night: '#0e0e0e',
        surface: '#161616',
        'surface-2': '#1f1f1f',
        edge: '#262626',
        muted: '#9ca3af',
        ink: '#f5f5f5',
        'ink-dim': '#b3b3b3',
        accent: '#fac12e',
        'accent-dim': '#d99a00',
        teal: '#45d0bd',
        rose: '#ef6464',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
