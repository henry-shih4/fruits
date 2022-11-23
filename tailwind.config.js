/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
          },

          "100%": {
            transform: "translateX:(0)",
          },
        },
      },
      animation: {
        "background-slide": "slideIn 1.5s linear",
      },
    },
  },
  plugins: [],
};
