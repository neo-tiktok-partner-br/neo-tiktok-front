import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://neoflowoff.agency',
  devToolbar: {
    enabled: false, // Desabilita a devToolbar para eliminar overhead no thread principal
  },
  vite: {
    server: {
      ws: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
  },
});
