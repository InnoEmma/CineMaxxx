/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "rgb(194, 122, 255)",
        primaryWhite: "rgb(255, 255, 255)",
        primaryOverviewPurple: "rgb(145, 91, 190)",
        primaryTagsPurple: "rgb(76, 8, 125)",
        primaryBackGroundBlack: "rgb(0, 0, 0)",
        primaryWatchTrailerPurple: "rgb(48, 8, 79)",
        primaryStarYellow: "rgb(253, 199, 0)",
      },
    },
    plugins: [],
  },
};
