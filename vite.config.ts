import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vite uses this to automatically rewrite your /assets/ paths to ./assets/ or /IQTeacherDay/assets/
  base: '/IQTeacherDay/', 
})
