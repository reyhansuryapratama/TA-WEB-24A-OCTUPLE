import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        ocean: {
          deep: "#0a3d5c",
          mid: "#0e6b8e",
          bright: "#1197c4",
        },
        turquoise: {
          DEFAULT: "#00c4b4",
          light: "#7ee8e0",
        },
        coral: {
          DEFAULT: "#ff6b47",
          light: "#ffb3a0",
        },
        sand: {
          DEFAULT: "#f5ead6",
          dark: "#e8d5b0",
        },
        pearl: "#fafaf8",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.19, 1, 0.22, 1) both",
        "fade-in-left": "fadeInLeft 0.7s cubic-bezier(0.19, 1, 0.22, 1) both",
        "fade-in-right": "fadeInRight 0.7s cubic-bezier(0.19, 1, 0.22, 1) both",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.19, 1, 0.22, 1) both",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 1.5s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(10, 61, 92, 0.1)",
        "card-hover": "0 20px 60px rgba(10, 61, 92, 0.18)",
        ocean: "0 8px 25px rgba(14, 107, 142, 0.45)",
        turquoise: "0 8px 25px rgba(0, 196, 180, 0.35)",
      },
      backgroundImage: {
        "ocean-gradient":
          "linear-gradient(135deg, #0a3d5c 0%, #0e6b8e 60%, #1197c4 100%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(10, 61, 92, 0.15) 0%, rgba(10, 61, 92, 0.4) 50%, rgba(10, 61, 92, 0.85) 100%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;