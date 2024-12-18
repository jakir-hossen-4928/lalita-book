import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        paper: "#FAF9F6",
        ink: "#2D3748",
        accent: "#4A5568",
      },
      fontFamily: {
        serif: ["Crimson Pro", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2D3748",
            lineHeight: "1.8",
            p: {
              marginBottom: "1.5em",
            },
            h2: {
              marginTop: "2em",
              marginBottom: "1em",
              fontSize: "1.75em",
              fontWeight: "600",
            },
            a: {
              color: "#4A5568",
              textDecoration: "none",
              transition: "color 0.2s ease",
              "&:hover": {
                color: "#2D3748",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;