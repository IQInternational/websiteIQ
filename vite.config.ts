import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'YOUR-REPO-NAME' with your actual repository name on GitHub
  base: 'websiteIQ', 
})
