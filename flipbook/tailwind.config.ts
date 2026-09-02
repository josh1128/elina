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
        // Soft coastal scrapbook palette
        cream: "#EEF4F8", // pale blue background
        page: "#F8FBFD", // blue-white paper
        ink: "#183B56", // deep navy headings
        "ink-soft": "#445B6B", // readable blue-grey body text
        blush: "#BFD7E6", // soft blue accent (legacy token kept for components)
        "blush-deep": "#4F7FA3", // accent blue
        navy: "#183B56",
        dusty: "#6F96B4",
        "soft-blue": "#BFD7E6",
        skywash: "#DCEAF3",
        paperwarm: "#FFFDF8",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-eb-garamond)", "Georgia", "serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        page: "0 24px 55px -20px rgba(39, 75, 100, 0.34)",
        photo: "0 10px 26px -12px rgba(40, 76, 100, 0.30)",
        coastal: "0 18px 48px rgba(39, 75, 100, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
