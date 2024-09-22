// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), mdx()],
  site: "https://repollodev.github.io",
  base: "TecitoHot",
});
