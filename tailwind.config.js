/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        wash: 'var(--wash)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        rule: 'var(--rule)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        serif: ['Newsreader', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '68rem',
      },
    },
  },
  plugins: [],
}
