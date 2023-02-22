/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#E28625",
        green: "#006971",
        darkGreen: "#004140",
        grey: "#F2F2F2",
      },
    },
  },
  plugins: [],
}
