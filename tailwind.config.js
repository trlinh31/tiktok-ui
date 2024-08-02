import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"],
  theme: {
    extend: {
      colors: {
        primary: "#fe2c55",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
