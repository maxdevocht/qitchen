/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        text: {
          default: "#EFE7D2",
          muted: "#F5F2EA",
          inverse: "#0A0B0A",
        },
        background: {
          default: "#0A0B0A",
          muted: "#181818",
          "muted-hover": "#1E1E1E",
          primary: "#EFE7D2",
          "primary-hover": "#CFBE91",
        },
        border: {
          default: "#333330",
          "default-hover": "#4E4C47",
        },
      },
    },
    fontFamily: {
      sans: ["Satoshi", "sans-serif"], // Satoshi as the default sans-serif
      forum: ["Forum", "serif"], // Forum as a custom font
    },
  },
  plugins: [require("tailwindcss-animate")],
};
