import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://neoflowoff.agency",
  vite: {
    server: {
      ws: {
        protocol: "ws",
        host: "localhost",
      },
    },
  },
});
