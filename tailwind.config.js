/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#00262F", 
        seaGreen: "#99D1D5"
      },
      screens: {
        'custom-lg': '1200px', 
      },
      fontFamily: {
        isf: ["myYekan", "sans-serif"],
      },
    },
  },
  plugins: [],
};