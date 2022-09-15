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
        1440: '1440px',
      },
      height: {
        578: '578px',
        541: '541px',
      },
      maxWidth: {
        1920: '1920px',
        1440: '1440px',
      },
      backgroundImage: {
        hero: "url('/img/hero.jpg')",
      },
    },
  },
  plugins: [],
};
