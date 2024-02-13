/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter", sans-serif;']
      },
      screens: {
        '2xl': '1680px'
      }
    },
  },
  plugins: [],
}

