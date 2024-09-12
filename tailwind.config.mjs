const { addIconSelectors } = require("@iconify/tailwind");

import { flavors } from "@catppuccin/palette";
let { latte, mocha } = flavors;
function mapColors(colorsObj) {
  let scheme = {
    primary: "sapphire",
    secondary: "mauve",
    accent: "yellow",
    neutral: "text",
    "base-100": "surface0",
    "base-200": "surface1",
    "base-300": "surface2",
    "base-content": "text",
    "neutral-content": "base",
    info: "blue",
    success: "green",
    warning: "peach",
    error: "maroon",
  };
  for (let key in scheme) {
    scheme[key] = colorsObj[scheme[key]]["hex"];
  }
  return scheme;
}
latte = mapColors(latte.colors);
mocha = mapColors(mocha.colors);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("daisyui"), addIconSelectors(["ph"])],
  daisyui: {
    themes: [
      {
        latte,
      },
      {
        mocha,
      },
    ],
  },
};
