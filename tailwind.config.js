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
      "royalBlue": {
        DEFAULT: "#335ade"
      },
      "coolGray": {
        DEFAULT: "#080807"
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
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
