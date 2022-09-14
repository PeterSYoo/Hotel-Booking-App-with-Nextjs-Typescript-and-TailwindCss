/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blueBtn: '#316BFF',
      },
      width: {
        1920: '1920px',
      },
      maxWidth: {
        1920: '1920px',
      },
    },
  },
  plugins: [],
};
