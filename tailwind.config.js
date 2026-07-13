/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00D9FF',
          violet: '#8B5CF6',
        },
        surface: {
          DEFAULT: '#1a1a1a',
          border: 'rgba(255,255,255,0.08)',
        },
        cream: '#e4ded7',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0,217,255,0.25)',
        card: '0 20px 45px -15px rgba(0,0,0,0.6)',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}