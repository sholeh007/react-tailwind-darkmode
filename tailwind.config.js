/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
