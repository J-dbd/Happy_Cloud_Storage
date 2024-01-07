/** @type {import('tailwindcss').Config} */
// import { createRequire } from "node:module";
// const require = createRequire(import.meta.url);

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //custom-colors
        lightBlue: "#8ECAE6",
        DarkerBlue: "#219EBC",
        NavyBlue: "#023047",
        SlientYello: "#FFB703",
        SlientOrange: "#FB8500",
        BgWhite: "#F5F5F5",
      },
    },
  },
  plugins: [require("daisyui")],
};
