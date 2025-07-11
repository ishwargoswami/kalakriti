import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    port: 3000, // 👈 change this to your desired port
    open: true, // automatically open in browser
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
