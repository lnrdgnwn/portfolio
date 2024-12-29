/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#FFFFFF",
          200: "#eeffb2",
          300: "#00FFFF",
          400: "#FFFFFF",
        },
        dark: "#171717",
        darkgrey: "#2C2C2C",
      },
    },
  },
  plugins: [],
};
