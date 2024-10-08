const { addIconSelectors } = require("@iconify/tailwind");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // Pixel font
        "jersey-10": ["'Jersey 10'", "monospace"],
        // Normal font
        "geist-sans": ["Geist Sans", "sans-serif"],
        // handwriting font
        "caveat-brush": ["Caveat Brush", "cursive"],
        // monospace font
        "geist-mono": ["Geist Mono", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("daisyui"),
    addIconSelectors(["ph"]),
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "latte",
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        ".padding-responsive": {
          padding: "0 1rem",
          "@screen sm": {
            padding: "0 1.5rem",
          },
          "@screen md": {
            padding: "0 3rem",
          },
          "@screen lg": {
            padding: "0 4rem",
          },
          "@screen xl": {
            padding: "0 5rem",
          },
          "@screen 2xl": {
            padding: "0 6rem",
          },
        },
      });
    }),
  ],
  daisyui: {
    themes: [
      {
        "ctp-latte": {
          primary: "#71ddc3",
          secondary: "#bfacf1",
          accent: "#edc634",
          "base-100": "#eff1f5",
          "base-200": "#e6e9ef",
          "base-300": "#dce0e8",
          "base-content": "#4c4f69",
          error: "#ec6373",
          warning: "#ecc633",
          info: "#89bbfa",
          success: "#bfce41",
          neutral: "#7c7f93",
          "neutral-content": "#dce0e8",
          "--rounded-box": "0rem",
          "--rounded-btn": "0rem",
          "--rounded-badge": "0rem",
        },
      },
      {
        "ctp-mocha": {
          primary: "#74c7ec",
          secondary: "#cba6f7",
          accent: "#f9e2af",
          "base-100": "#1e1e2e",
          "base-200": "#181825",
          "base-300": "#11111b",
          "base-content": "#cdd6f4",
          neutral: "#9399b2",
          "neutral-content": "#11111b",
          error: "#f38ba8",
          warning: "#fab387",
          info: "#89b4fa",
          success: "#a6e3a1",
          "--rounded-box": "0rem",
          "--rounded-btn": "0rem",
          "--rounded-badge": "0rem",
        },
      },
    ],
  },
};
