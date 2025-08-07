/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      'marquee-reverse': {
        '0%': { transform: 'translateX(-50%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      shine: {
        '0%': { transform: 'translateX(-100%) skewX(-20deg)', opacity: '0' },
        '50%': { opacity: '0.5' },
        '100%': { transform: 'translateX(200%) skewX(-20deg)', opacity: '0' },
      },
    },
    animation: {
      marquee: 'marquee 30s linear infinite',
      'marquee-reverse': 'marquee-reverse 30s linear infinite',
      shine: 'shine 1s ease-in-out',
    },
    colors: {
      primary: '#0d3b66',
      accent: {
        DEFAULT: '#f4d35e',
        dark: '#dfa13f',
        200: '#FDE68A',
        300: '#FB923C',
        peach: '#FFD8AC',
      },
    },
  },
};
export const plugins = [];
