/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,otf}", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        larsseit: ["Larsseit", "sans-serif"],
      },
      colors: {
        "t-grey": "#191919",
        "t-green": "#C7FF57",
      },
    },
  },
  plugins: [],
};
