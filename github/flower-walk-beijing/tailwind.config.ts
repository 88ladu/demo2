import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        petal: "#FAF8F5",
        sage: "#9FB59A",
        rose: "#F3D7D7",
        begonia: "#F7E0E0",
        ink: "#2E2E2E",
        moss: "#536A50",
        pollen: "#D8B15E"
      },
      fontFamily: {
        sans: ["Noto Sans SC", "Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "Noto Sans SC", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 28px 90px rgba(46, 46, 46, 0.10)",
        lift: "0 18px 44px rgba(83, 106, 80, 0.16)"
      },
      borderRadius: {
        panel: "8px"
      }
    }
  },
  plugins: []
};

export default config;
