// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // doar dacă folosești și pages/
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#dc2626",
      },
    },
  },
  plugins: [],
};

export default config;
