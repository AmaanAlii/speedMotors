/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        skid: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(10px) rotate(-20deg)" },
          "50%": { transform: "translateX(-10px) rotate(20deg)" },
          "75%": { transform: "translateX(5px) rotate(-5deg)" },
        },
        smoke: {
          "0%": { opacity: "1", transform: "scale(0.5) translateX(0)" },
          "25%": { opacity: "0.8", transform: "scale(1.5) translatey(0px)" },
          "50%": { opacity: "0.5", transform: "scale(1.5) translatey(-5px)" },
          "75%": { opacity: "0.3", transform: "scale(1.5) translatey(-5px)" },
          "100%": { opacity: "0", transform: "scale(1.5) translatey(5px)" },
        },
      },
      animation: {
        skid: "skid 2.5s ease-in-out",
        smoke: "smoke 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
