/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
      },
      colors: {
        brand: "#FFC700",
        "brand-grey": "#FAFAFC",
      },
    },
  },
  plugins: [],
};
