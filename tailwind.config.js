/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#F5F5F5',
        text: '#333333',
      },
    },
  },
  plugins: [],
};