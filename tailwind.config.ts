import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#6366f1",
          soft: "#818cf8",
        },
      },
      boxShadow: {
        card: "0 12px 40px -20px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        "accent-radial":
          "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.22), transparent 40%), radial-gradient(circle at 80% 10%, rgba(56, 189, 248, 0.18), transparent 35%)",
      },
    },
  },
  plugins: [],
};

export default config;
