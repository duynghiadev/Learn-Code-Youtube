const COLORS = {
  primary: 'var(--primary)',
  baseBackground: 'var(--baseBackground)',
  baseText: 'var(--baseText)',
  baseBorder: 'var(--baseBorder)'
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors: COLORS }
  },
  plugins: []
}
