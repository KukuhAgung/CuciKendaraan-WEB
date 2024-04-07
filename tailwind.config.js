/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0092D1",
        secondary: "#2C2C2C",
        accent: "#FBFBFB",
        ternitary: "#515151",
        green: "#00B312",
        orange: "#D88200",
        pink: "#DD006A",
        stroke: "#E4E4E4",
      },
      backgroundImage: {
        pelayanan: 'url("..images/pelayanan.png")',
      },
    },
  },
  plugins: [require("daisyui")],
};
