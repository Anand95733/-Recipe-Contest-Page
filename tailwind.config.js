/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Replace with your desired font
      },
      colors: {
        'primary': '#6366F1',
        'secondary': '#374151',
        'accent': '#FCD34D',
      },
    },
  },
  plugins: [],
}