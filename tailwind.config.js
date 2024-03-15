/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Myriad", "Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      PGreen: "#B2c248",
      GreenLight: "#EBF9F4",
      PBlue: "#0077BE",
      PGray: "#7D7F7C",
      PLuminous: "#00FFBF",
      Pred: "#FF401E",
      Pyellow: "#E8F4FD",
      Back: "#EAE7E7",
      galeryBlack: "#2A2B2A",
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [],
};
