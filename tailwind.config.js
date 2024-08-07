/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#B8ED0B',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        fordsFolly: ['FordsFolly', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

