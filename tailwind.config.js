/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        cust: "393px",
        sma: "375px",
      },
      fontFamily: {
        Barlow: ["Barlow"],
        Outfit: ["Outfit"],
        Anton: ["Anton"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "black"],
  },
};
