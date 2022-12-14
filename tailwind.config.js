/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF5E14",
          secondary: "#ff5e14",
          accent: "#F9F9F9",
          neutral: "#3d4451",
          "danger": "#C50707",
          "base-100": "#ffffff",

        },
      },
      "white",
      "cupcake",
    ],
  },



  plugins: [require("daisyui")],
}