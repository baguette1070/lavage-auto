/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "couleur-titre": "#4AA3A2",
        "couleur-texte": "#D4D3DC",
        "couleur-hover-button": ""
      }
    },
  },
  plugins: [],
}

