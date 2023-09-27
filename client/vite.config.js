import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FRDC-UI/",
  plugins: [react()],

  define: {
    'process.env': {
      PUBLIC_URL: "./"
    }
  }
})

