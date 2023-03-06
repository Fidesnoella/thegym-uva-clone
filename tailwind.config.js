const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 10px 20px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 25%)",
        "4xl": "0 2px 8px rgb(0 0 0 / 25%)",
        "5xl": "116px 86px 0 0 #f7f7f7",
        "6xl": "0 2px 10px rgb(0 0 0 / 15%)",
        "7xl": "0 0 10px rgb(0 0 0 / 15%)",
      },
      fontFamily: {
        sans: ["var(--font-utopia)", ...fontFamily.sans],
        sourceSans: ["var(--font-sourceSans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
