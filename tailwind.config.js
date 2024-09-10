/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },

      colors: {
        Red: "hsl(0, 100%, 74%)",
        Green: "hsl(154, 59%, 51%)",

        Blue: "hsl(248, 32%, 49%)",

        DarkBlue: "hsl(249, 10%, 26%)",
        GrayishBlue: "hsl(246, 25%, 77%)",
      },

      backgroundImage: {
        mobile: "url('./images/bg-intro-mobile.png')",
        desktop: "url('./images/bg-intro-desktop.png')",
      },
    },
  },
  plugins: [],
};
