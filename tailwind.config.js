/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%':   { transform: 'translateX(-100%) skewX(-20deg)', opacity: '0' },
          '50%':  { opacity: '0.5' },
          '100%': { transform: 'translateX(200%) skewX(-20deg)', opacity: '0' },
        },
      },
      animation: {
        shine: 'shine 1s ease-in-out',
      },
      colors: {
        primary: "#0d3b66",
        accent: {
          DEFAULT: "#f4d35e",   // base accent
          dark:    "#dfa13f",   // accent-dark
          200:     "#FDE68A",   // soft-gold
          300:     "#FB923C",   // coral
        },
      },
    },
  },
  plugins: [],
};
