import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        accent: "#f97316",
      },
    },
  },
  plugins: [],
};

export default config;
