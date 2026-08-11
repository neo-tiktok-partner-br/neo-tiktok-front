import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://neotiktok.com',
  devToolbar: {
    enabled: false, // Desabilita a devToolbar para eliminar overhead no thread principal
  },
  vite: {
    server: {
      allowedHosts: ['neotiktok.com', '.neotiktok.com', 'neoflowoff.agency', '.neoflowoff.agency', 'localhost'],
      ws: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
    preview: {
      allowedHosts: ['neotiktok.com', '.neotiktok.com', 'neoflowoff.agency', '.neoflowoff.agency', 'localhost'],
    },
  },
});
