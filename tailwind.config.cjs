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
        "brand-dark": "#e8b502",
        "brand-grey": "#FAFAFC",
        "brand-grey-1": "#F2F2F2",
        "brand-secondary": "#8D92A3",
        "brand-secondary-dark": "#696d7a",
        error: "#D9435E",
      },
    },
  },
  plugins: [],
};
