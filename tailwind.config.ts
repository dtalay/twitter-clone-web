import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/designsystem/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-btn": {
          DEFAULT: "#1d9bf0",
          hover: "#1a8cd8",
        },
        "secondary-btn": {
          DEFAULT: "#eff3f4",
          hover: "#d7dbdc",
          label: "#0f1419",
        },
      },
    },
  },
  plugins: [],
};
export default config;
