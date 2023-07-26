/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3d6cb9",
        secondary: "#00d1ff",
        font: "#00fff0",
      },
      backgroundImage: {
        bg: "radial-gradient(circle, rgba(113,113,113,1) 0%, rgba(2,0,36,1) 52%)",
      },
    },
  },
  plugins: [],
};
