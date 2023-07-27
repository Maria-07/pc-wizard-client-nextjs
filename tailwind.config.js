/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292929",
        secondary: "#e6e6e6",
        accent: "#ff9900",
        popover: "#808080",
        fontClr: "#050505",
      },
      fontFamily: {
        primary: ["EB Garamond", "serif"],
        secondary: ["Libre Caslon Text", "serif"],
      },
    },
  },
  plugins: [],
};
