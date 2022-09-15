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
        1170: '1170px',
        250: '250px',
      },
      height: {
        578: '578px',
        541: '541px',
        207: '207px',
      },
      maxWidth: {
        1920: '1920px',
        1440: '1440px',
      },
      backgroundImage: {
        hero: "url('/img/hero.jpg')",
      },
      lineHeight: {
        54: '54px',
        80: '80px',
      },
      fontSize: {
        64: '64px',
      },
      fontFamily: {
        dmSans: 'DM Sans',
        poppins: 'Poppins',
      },
      padding: {
        35: '35px',
        30: '30px',
        18: '18px',
      },
    },
  },
  plugins: [],
};
