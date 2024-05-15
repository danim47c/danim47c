import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // adapter: cloudflare({ imageService: "compile" }), // Uncomment this line to enable Cloudflare adapter when output is set to "hybrid" or "server"
});
