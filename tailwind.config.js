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
