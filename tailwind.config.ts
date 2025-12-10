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
        primary: "#FF6B35",
        secondary: "#7B2CBF",
        accent: "#F77F00",
        orange: {
          DEFAULT: "#FF6B35",
          light: "#FF8C61",
          dark: "#E85A2A",
        },
        purple: {
          DEFAULT: "#7B2CBF",
          light: "#9D4EDD",
          dark: "#5A189A",
        },
        sand: "#F5F3EF",
        ink: "#2B2D42",
        slate: "#8D99AE",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
