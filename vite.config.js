import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Brand360/',  // correct
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
