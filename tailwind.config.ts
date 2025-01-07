import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [
    require('tailwindcss-textshadow'),
  ],
} satisfies Config;
