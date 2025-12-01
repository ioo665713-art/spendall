/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-short': 'bounce-short 1s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'marquee': 'marquee 60s linear infinite',
        'pulse-gold': 'pulse-gold 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0px rgba(234, 179, 8, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(234, 179, 8, 0)' },
        }
      }
    },
  },
  plugins: [],
}