import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Typography */
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-space-mono)", "monospace"],
      },

      /* Colors - semantic naming for better readability */
      colors: {
        // Primary colors
        "off-black": "#0a0a0a",
        "off-white": "#f5f5f0",
        text: "#f5f5f0",
        bg: "#0a0a0a",

        // Accent colors
        accent: "#ff3d00",
        "accent-alt": "#00ff88",
      },

      /* Animations */
      transitionTimingFunction: {
        elastic: "cubic-bezier(0.25, 1, 0.5, 1)",
      },

      transitionDuration: {
        "700": "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
