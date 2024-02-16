/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["INTER", "sans-serif"],
      },
      colors: {
        "neu-100": "hsl(36, 100%, 99%)",
        "neu-200": "hsl(233, 8%, 79%)",
        "neu-400": "hsl(236, 13%, 42%)",
        "neu-600": "hsl(198, 62%, 26%)",
        "neu-900": "hsl(240, 100%, 5%)",
        orange: "hsl(35, 77%, 62%)",
        red: "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
};
