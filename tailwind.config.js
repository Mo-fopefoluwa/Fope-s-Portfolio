/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {

      'lg': '1024px',

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
      
    },
    extend: {},
  },
  plugins: [],
}

