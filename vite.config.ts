import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/restauranteWeb/patiocriollo/',  // Ajusta la base según tu estructura de carpetas

})
