import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        guru: ["Guru", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
