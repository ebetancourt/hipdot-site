/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,jsx,tsx,js,ts}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      fontFamily: {
        Syne: ["Syne", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#002D62",
          hover: "#00224A",
        },
        dark: {
          DEFAULT: "#2C2C2C",
          light: "#414141",
        },
        light: {
          DEFAULT: "#EAEDF0",
          border: "#B8C1CC",
        },
      },
    },
  },
  plugins: [],
};
