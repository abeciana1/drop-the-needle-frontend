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
    screens: {
      'xs': '325px',
      // => @media (min-width: 325px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "coolGray": "#080807",
        // "royalBlue": "#335ade"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
