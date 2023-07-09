/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    screens: {

      'lg': '1024px',

      'md': {'max': '980px'},

      'sm': {'max': '639px'},
      
    },
    extend: {},
  },
  plugins: [],
}

//{ fontFamily: {
  //   'sans': ["'DM Sans'", sans-serif],
  //   'sanss': ["'Josefin Sans'", sans-serif],
  //   'mono': ["'Cabin Sketch'", cursive],
  //   'serif': ["'Josefin Sans'", sans-serif],
  // },