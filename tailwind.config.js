const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "altWhite": {
        DEFAULT: "#f8f8e9"
      },
      "coolGray": {
        DEFAULT: "#080807"
      },
      "royalBlue": {
        DEFAULT: "#335ade"
      },
      "altGreen": {
        DEFAULT: "#558564"
      },
      "scarlet": {
        DEFAULT: "#ff2e00"
      },
      "ceruBlue": {
        DEFAULT: "#00a8e8"
      },
      "altOrange": {
        DEFAULT: "#f0a202"
      },
      ...colors
    },
    extend: {},
  },
  plugins: [],
}
