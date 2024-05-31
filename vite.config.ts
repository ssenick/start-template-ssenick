import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      svgr({
         svgrOptions: {
            icon: true,
         },
      }),
      react(),
   ],
   server: {
      strictPort: true,
      open: true,
      host: '0.0.0.0',
   },
   resolve: {
      alias: [{ find: '@', replacement: '/src' }],
   },
});
