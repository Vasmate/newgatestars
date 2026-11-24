// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ff4500', // energetic accent
        dark: '#121212',
        light: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
