import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Allow all network interfaces
    port: 10000 || 5173,  // Use the specified port or default to 5173
    allowedHosts: [
      'frontendet.onrender.com', // Add the allowed host here
    ],
  },
  plugins: [react(), tailwindcss()],
})
