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
        primary: "#ef99b1",
        secondary: "#EC4899",
        background: "#111827",
        text: "#F3F4F6",
        accent: "#8B5CF6",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "heading-1": ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-2": ["2.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-3": ["2rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-large": ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-normal": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      // ... keep existing keyframes and animations
    },
  },
  plugins: [],
};

export default config;
