import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
        teal: {
          accent: "#0D9488",
          light: "#14B8A6",
          muted: "#2DD4BF",
        },
        charcoal: "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
