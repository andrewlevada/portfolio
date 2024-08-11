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
          fontFamily: 'var(--font-neue-montreal)',
          fontSize: "36px",
          fontWeight: "400",
          lineHeight: "100%",
          letterSpacing: "-1.08px"
        },
        'p': {
          fontFamily: 'var(--font-neue-montreal)',
          fontSize: "15px",
          fontWeight: "400",
          lineHeight: "19px",
          letterSpacing: "0.1px"
        }
      })
    })
  ]
} as Config;
