/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto Condensed'", "sans-serif"],
        archivo: ["'Archivo Black'", "sans-serif"],
        robotoRegular: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
