import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        'h1': {
          fontFamily: '"PP Neue Montreal"',
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "105%",
          letterSpacing: "-0.36px"
        },
        'p': {
          fontFamily: '"PP Neue Montreal"',
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "-0.16px"
        }
      })
    })
  ]
} as Config;
