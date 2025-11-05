import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [astroI18next()],
  // adapter: cloudflare({ imageService: "compile" }), // Uncomment this line to enable Cloudflare adapter when output is set to "hybrid" or "server"
});
