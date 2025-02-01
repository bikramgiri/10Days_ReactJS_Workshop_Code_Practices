import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
  // To change the port number 
  // server : {
  //   port : 3000
  // }
})
