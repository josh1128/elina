import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm scrapbook palette
        cream: "#F7F2E9", // background
        page: "#FBF8F1", // paper
        ink: "#3E2E27", // dark brown text
        "ink-soft": "#6B564C", // muted brown
        blush: "#E7B2AB", // soft pink accent
        "blush-deep": "#D18E86",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-eb-garamond)", "Georgia", "serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        page: "0 22px 45px -20px rgba(62, 46, 39, 0.45)",
        photo: "0 6px 18px -8px rgba(62, 46, 39, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
