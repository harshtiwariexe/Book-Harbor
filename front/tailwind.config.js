/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "50px",
        "4xl": "100px",
      },
      colors: {
        glass: "rgba(255,255,255,0.20)",
        "glass-dark": "rgba(65,65,65,0.20)",
      },
    },
  },
  plugins: [],
};
