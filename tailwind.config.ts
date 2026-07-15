import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0c0c0b",
          light: "#171714",
          lighter: "#232320",
        },
        olive: {
          DEFAULT: "#3f4229",
          light: "#565a3a",
          dark: "#2a2c1b",
        },
        rust: {
          DEFAULT: "#bf5330",
          light: "#d97b4f",
          dark: "#8f3d22",
        },
        amber: {
          DEFAULT: "#d99a45",
          light: "#e8b877",
        },
        cream: {
          DEFAULT: "#f2ede1",
          dim: "#c9c4b7",
        },
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grain-fade":
          "linear-gradient(180deg, rgba(12,12,11,0) 0%, rgba(12,12,11,0.85) 70%, rgba(12,12,11,1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
