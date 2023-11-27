/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#C5D3DE",
        midGreen: "#2E5462",
        darkGreen: "#0D1926",
      },
    },
  },
  plugins: [],
};
