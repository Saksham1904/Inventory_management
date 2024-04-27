/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluee: '#01AFF6',
        dbluee: '#0192CB', 
        dgreen: '#054753',
        lgreen: '#076374',
        grey: '#EDEDED',
        steelwhite: '#F0F2F6',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      opacity: {
        '62': '.61.8',
      },
      width: {
        '391': '24.4375rem',
        '150': '9.375rem',
      },
      // backgroundImage: {
      //   'salylite': "url('client/src/assets/Saly38.png')",
      //   'saly': "url('client/src/assets/Saly.png')",
      // },
    },
  },
  plugins: [],
}

