import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark": '#141414',
        "darkblue": '#00d0ff',
        "banner":'#007EA4',
      },
    },
    screens:{
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px"
    }
  },
  darkMode: "class",
  plugins: [
    [nextui()],
    require('tailwindcss-textshadow'),
  ],
} satisfies Config;
