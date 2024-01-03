/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        yellow1: "#ba8108",
        yellow2: "#f9c75cfa",
        yellow3: "#352505",
        yellow4: "#e2d9bb7f", 
        yellow5: "#ba810808", 

        pedyellow : "#ba820873",
        footerDark : "#343a40"

        
      },
      backgrounds: {
        yellow1: "#ba8108",
        d9d9d91: "linear-gradient(90deg,#e2d9bb7f,#d9d9d96d)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
