/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        surface: '#12121A',
        primary: '#6C63FF',
        secondary: '#00D9FF',
        'text-primary': '#F0F0FF',
        'text-muted': '#6B6B8A',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        fa: ['"Vazirmatn"', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        badge: '999px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(108, 99, 255, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 217, 255, 0.3)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
