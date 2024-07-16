/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'black-transparent': 'rgba(0, 0, 0, 0.2)', // Ajusta el valor alpha según necesites

        maroon: {
          900: '#4B0000', // Granate oscuro
          
        },
      },
    },
  },
  plugins: [],
}
