import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|dropdown|ripple|spinner|menu|divider|popover).js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fe2c55",
        dark: "#121212",
        hoverDark: "#1b1b1b",
        hoverLight: "#f8f8f8",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
