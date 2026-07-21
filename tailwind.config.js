import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Pega todas as pastas dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;