/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gumbo: {
          50: "#f4f7f7",
          100: "#e2e9eb",
          200: "#c9d6d8",
          300: "#a3b8bd",
          400: "#819ba2",
          500: "#5b777f",
          600: "#4e646c",
          700: "#44545a",
          800: "#3d484d",
          900: "#363f43",
          950: "#21272b",
        },
      },
    },
  },
  plugins: [],
};
