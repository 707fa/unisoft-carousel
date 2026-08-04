/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#635bff",
          dark: "#0a2540",
        },
        codebg: "#1a1a2e",
      },
    },
  },
  plugins: [],
};
