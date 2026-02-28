import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        accent: "#2563EB",
      },
      fontFamily: {
        pixel: ["Press Start 2P", "cursive"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
