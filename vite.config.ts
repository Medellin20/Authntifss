import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-email-api',
      apply: 'serve',
      configureServer(server) {
        const api = require('./server/index.js');
        server.middlewares.use(api);
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
