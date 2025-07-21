import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Brand360/',        // ✅ Ensures correct paths for GitHub Pages
  plugins: [react()],        // ✅ Enables React JSX support
  build: {
    outDir: 'build',         // ✅ Changes output folder from `dist` to `build`
  },
});
