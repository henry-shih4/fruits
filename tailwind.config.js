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
        flash:{
          "0%": {
            opacity: "0",
            transform:'translate(-100%)'
          },

          "50%": {
            opacity:'1'
          },
          '100%':{
            opacity:'0',
            transform:'translate(100%)'
          },
        },
      },
      animation: {
        backgroundSlide: "slideIn 1.2s linear",
        flash: "flash 2s infinite",
      },
    },
  },
  plugins: [],
};
