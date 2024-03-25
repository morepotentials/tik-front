/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,otf}", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        larsseit: ["Larsseit", "sans-serif"],
      },
      colors: {
        "t-grey": "#343434",
        "t-green": "#F6E82E",
      },
    },
  },
  plugins: [],
};
