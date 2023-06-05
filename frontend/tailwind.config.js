/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['ClashDisplayRegular', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        tomato: "#B22222"
      }
    },
  },
  plugins: [],
}

