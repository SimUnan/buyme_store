/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#3D5A80",
        "secondary": "#98C1D9",
        "backgroundColor": "#D1EAF3",
        "redTxt": "#C16C6C",
        "grayTxt": "#7E7878",
        "btn": "#5086CB",
      }
    },
  },
  plugins: [],
}