import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This tells Vite to look for assets relative to the repository folder
  base: '/IQTeacherDay/',
})
