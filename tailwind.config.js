/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'preto': '#000000',
        'branco': '#FFFFFF',
        'destaque': '#A80000', // Vermelho Bordô
        'cinza': '#333333',
      },
    },
  },
  plugins: [],
}