import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Brand360/',  // <-- exact repo name with leading and trailing slash
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
