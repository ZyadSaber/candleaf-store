/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#56B280",
        lightMain: "rgba(86, 178, 128, 0.1)",
        dark: "#272727",
        glossy: "rgba(247,248,250, 0.8)",
        faded: "#5E6E89",
        second: "#F7F8FA",
      },
      backgroundImage: {
        headingImage: "url('/src/images/heading-image.svg')",
      },
    },
  },
  plugins: [],
};
