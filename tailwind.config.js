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
        custom: '#4d6160',
        beigePrincipal: '#f6eee0',
        marronSide:'#f18273',
        infoBack:'#d0deb8',
        cardChefBack:'#384252',
        footerBack:'#03453d',
        horarioAperBack:'#e9d6af',
        cartaBack:'#7a6f5d',
        cartaLetra:'#82bfa0',
        cabeceraCarta:'#c6d1a6',
        maroon: {
          900: '#4B0000', // Granate oscuro
          
        },
      },
    },
  },
  plugins: [],
}
