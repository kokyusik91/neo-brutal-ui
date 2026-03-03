import type { Config } from "tailwindcss";

export const neoBrutalPreset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        nb: {
          primary: "#FF6B6B",
          secondary: "#4ECDC4",
          accent: "#FFE66D",
          success: "#51CF66",
          warning: "#FF922B",
          danger: "#FF6B6B",
          info: "#339AF0",
          bg: "#FFF8E7",
          surface: "#FFFFFF",
          text: "#1A1A2E",
          border: "#1A1A2E",
        },
      },
      borderWidth: {
        nb: "3px",
      },
      boxShadow: {
        "nb-sm": "2px 2px 0px 0px #1A1A2E",
        "nb-md": "4px 4px 0px 0px #1A1A2E",
        "nb-lg": "6px 6px 0px 0px #1A1A2E",
      },
      borderRadius: {
        nb: "12px",
      },
      fontFamily: {
        nb: [
          "Space Grotesk",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      keyframes: {
        "nb-press": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(2px, 2px)" },
        },
        "nb-shake": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(2deg)" },
        },
        "nb-pop": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "nb-press": "nb-press 0.1s ease-in-out forwards",
        "nb-shake": "nb-shake 0.3s ease-in-out",
        "nb-pop": "nb-pop 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
