/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loginBg': 'url("./src/assets/christmas_1920_1200.jpg")'
      }
    },
  },
  plugins: [],
}

