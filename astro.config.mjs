// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://symphonious-bunny-a73445.netlify.app/",
  integrations: [preact()]
});