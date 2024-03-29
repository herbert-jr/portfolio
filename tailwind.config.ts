import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          default: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
          content: 'var(--primary-content)',
        },
        copy: {
          default: 'var(--copy)',
          light: 'var(--copy-light)',
          lighter: 'var(--copy-lighter)',
        },
        'big-dot': 'var(--big-dot)',
        'big-dot-white': 'var(--big-dot-white)',
        burger: 'var(--burger)',
        'burger-active': 'var(--burger-active)',
        'menu-background': 'var(--menu-background)',
        bar: 'var(--bar)',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
