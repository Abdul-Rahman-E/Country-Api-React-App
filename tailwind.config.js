import Shimmer from "./src/skeletons/Shimmer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        head_white: "hsl(0, 0%, 100%)",
        body_grey: "hsl(0, 0%, 95%)",
        light_mode_text: "hsl(200, 15%, 8%)",
        head_dark: "hsl(209, 23%, 22%)",
        body_dark: "hsl(207, 26%, 17%)",
      },
      fontSize: {
        home_text: "14px",
        detail_text: "16px",
      },
      keyframes: {
        flash: {
          "0%": { transform: "translateX(-200%)" },
          "50%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        flash: "flash 2.5s linear infinite 3s",
      },
    },
    screens: {
      xs: "320px",
      sm: "375px",
      md: "640px",
      "2md": "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    boxShadow: {
      dark: "rgba(0, 0, 0, 0.2) 0px 2px 8px 1px",
    },
  },
  plugins: [],
};
