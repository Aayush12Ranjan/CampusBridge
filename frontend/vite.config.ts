// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 👈 important for relative paths in production
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  json: {
    stringify: true,
  },
  build: {
    outDir: 'dist', // make sure it's default or explicitly set
    emptyOutDir: true,
  }
});


