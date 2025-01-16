/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: '#122452', // Primary blue shade
        },
        customRed: {
          DEFAULT: '#A60000', // Primary red shade
        },
        customWhite: {
          DEFAULT: '#FDFBFE', // Off-white shade
        },
        customGray:{
          DEFAULT: '#87CEEB', // Light Gray
        },
      },
    },
    fontFamily: {
      sans: ['"Carter One"', 'cursive'], // Adds Carter One font
    },
  },
  plugins: [],
}