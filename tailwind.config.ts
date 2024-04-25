import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      wipe: {
        "0%": { transform: "translateY(0%) translateX(0%)" },
        "50%": { transform: "translateY(90%) translateX(-1%) scale(1.015)" },
        "100%": { transform: "translateY(0%) translateX(0%)" },
      },
      "wipe-2": {
        "0%": { transform: "translateY(0%) translateX(0%)" },
        "50%": { transform: "translateY(180%) translateX(-2%) scale(1.03)" },
        "100%": { transform: "translateY(-0%) translateX(0%)" },
      },
      "wipe-3": {
        "0%": { transform: "translateY(0%) translateX(0%)" },
        "50%": { transform: "translateY(270%) translateX(-3.5%) scale(1.065)" },
        "100%": { transform: "translateY(0%) translateX(0%)", display: "none" },
      },
      "fade-in": {
        "0%": { opacity: "0" },
        "92%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "fade-in-2": {
        "0%": { opacity: "0" },
        "90%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      "wipe-text": "wipe 2.4s cubic-bezier(.62,.28,.23,.99)",
      "wipe-text-2": "wipe-2 2.4s cubic-bezier(.62,.28,.23,.99)",
      "wipe-text-3": "wipe-3 2.4s cubic-bezier(.62,.28,.23,.99)",
      "fade-in": "fade-in 2s cubic-bezier(.62,.28,.23,.99)",
      "fade-in-2": "fade-in-2 2s cubic-bezier(.62,.28,.23,.99)",
    },
  },
  plugins: [],
};
export default config;
