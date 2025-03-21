/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merri: ["var(--merri-font)", ...fontFamily.sans],
        bely: ["var(--bely-font)", ...fontFamily.sans],
      },
      colors: {
        primary: "#143D30",
        secondary: "#B2A978",
        btn: "#286153",
      },
      ringColor: {
        DEFAULT: '#236253', // Custom default ring color
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
