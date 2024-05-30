import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
const vitePWA = VitePWA({manifest : {
  
  "name": "SupaShop Ecommerce",
  "short_name": "SupaShop",
  "description": "E-commerce platform bringing accessibility and transparency to your doorstep 🧡",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/SupaShop.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/SupaShop.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/SupaShop.png",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ]
}})
export default defineConfig({
  plugins: [react(),vitePWA],
})
