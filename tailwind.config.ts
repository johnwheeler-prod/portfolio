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
          "conic-gradient(from 140deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      hammersmith: ["Hammersmith One", "sans-serif"],
    },
    keyframes: {
      float: {
        "0%": { transform: "translateY(0%) translateX(0%)" },
        "33%": { transform: "translateY(26%) translateX(-12%)" },
        "50%": { transform: "translateY(39%) translateX(-6%) scale(1.015)" },
        "86%": { transform: "translateY(39%) translateX(-6%) scale(1.034)" },
        "100%": { transform: "translateY(0%) translateX(0%)" },
      },
      "float-1": {
        "0%": { transform: "translateY(0%) translateX(0%)" },
        "15%": { transform: "translateY(-12%) translateX(9%)" },
        "33%": { transform: "translateY(-19%) translateX(12%) scale(1.015)" },
        "52%": { transform: "translateY(-4%) translateX(18%) scale(1.034)" },
        "86%": { transform: "translateY(-1%) translateX(6%) scale(1.01)" },
        "100%": { transform: "translateY(0%) translateX(0%)" },
      },
      "float-2": {
        "0%": { transform: "translateY(0%) translateX(0%)" },
        "25%": { transform: "translateY(6%) translateX(-20%)" },
        "50%": { transform: "translateY(39%) translateX(-32%) scale(1.015)" },
        "75%": { transform: "translateY(39%) translateX(-18%) scale(1.034)" },
        "100%": { transform: "translateY(0%) translateX(0%)" },
      },
      "float-3": {
        "0%": { transform: "translateY(0%) translateX(0%)" },
        "25%": { transform: "translateY(6%) translateX(-2%)" },
        "50%": { transform: "translateY(39%) translateX(-4%) scale(1.015)" },
        "75%": { transform: "translateY(-18%) translateX(-1%) scale(1.034)" },
        "100%": { transform: "translateY(0%) translateX(0%)" },
      },
    },
    animation: {
      float: "float 5.7s cubic-bezier(.62,.28,.23,.99) infinite",
      "float-1": "float-1 9.1s ease-in-out infinite",
      "float-2": "float-2 7.2s cubic-bezier(.62,.28,.23,.99) infinite",
      "float-3": "float-2 7.2s EASE-IN-OUT infinite",
    },
  },
  plugins: [],
};
export default config;
