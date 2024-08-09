import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
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
