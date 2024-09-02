/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "couleur-titre": "#A7E0E0",
        "couleur-texte": "#D4D3DC",
        "couleur-hover-button": "#4AA3A2"
      }
    },
  },
  plugins: [],
}

