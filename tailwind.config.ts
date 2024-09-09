import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "tiny": { "max": "700px" },
      "m": { "max": "940px" },
      "w": { "max": "1200px" }
    }
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        'h1': {
          fontFamily: 'var(--font-neue-montreal)',
          fontSize: "36px",
          fontWeight: "400",
          lineHeight: "100%",
          letterSpacing: "-1.08px",
          color: "#474747"
        },
        'h3': {
          fontFamily: 'var(--font-neue-montreal)',
          fontSize: "24px",
          lineHeight: "100%",
          letterSpacing: "-0.72px",
          color: "#474747"
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
