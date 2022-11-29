/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        watermelon: "#fca5a5",
        lightorange: "#fdba74",
        kiwi: "#90C825",
        banana: "#fef08a",
        strawberry: "#dc2626",
        blueberry: "#0284c7",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
          },

          "100%": {
            transform: "translateX:(0)",
          },
        },
        flash: {
          "0%": {
            transform: "translate(-100%)",
          },

          "50%": { transform: "translate(30%)" },
          "100%": {
            transform: "translate(-100%)",
          },
        },
      },
      animation: {
        backgroundSlide: "slideIn 1.2s linear",
        flash: "flash 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};
