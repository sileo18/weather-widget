/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main": "#D9BD2A",
        "switch": "#BCBCBC"
      },
      borderRadius: {
        "widget": "60px",
      },
      fontSize: {
        "deegres": "128px",
      },
      borderColor: {
        "switch": "#BCBCBC"
      }
    },
  },
  plugins: [],
}