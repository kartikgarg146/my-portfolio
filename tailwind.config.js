/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f17",
        accent: "#7c3aed",
        accent2: "#00d4ff"
      }
    }
  },
  plugins: [],
};

export default config;
