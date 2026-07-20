import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { xl: "1200px", "2xl": "1200px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff5f13",
          dark: "#e25311",
          light: "#f27420",
        },
        ink: {
          DEFAULT: "#0e132a",
          900: "#0b1c39",
          800: "#161e46",
          700: "#00235b",
          950: "#16161a",
        },
        surface: {
          soft: "#f7f7fd",
          muted: "#f1f4fa",
          alt: "#f9fafc",
          dark: "#12172c",
          "dark-alt": "#0b0f1f",
        },
        muted: {
          DEFAULT: "#646464",
          light: "#9fa6bd",
        },
      },
      fontFamily: {
        heading: ["var(--font-teko)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
        accent: ["var(--font-lato)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(14, 19, 42, 0.08)",
        pop: "0 15px 40px rgba(255, 95, 19, 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        liquidFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        spark: {
          "0%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-160px) translateX(var(--drift, 20px)) scale(0.3)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        fadeInUp: "fadeInUp 0.8s ease forwards",
        liquidFlow: "liquidFlow 3.5s linear infinite",
        spark: "spark 2.8s ease-in infinite",
      },
    },
  },
  plugins: [],
};
export default config;
