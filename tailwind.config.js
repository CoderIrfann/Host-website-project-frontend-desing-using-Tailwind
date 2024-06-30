// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily:{
        playfair: "'Playfair Display' , serif",
        lato:"'Lato', 'snas-serif",
      }
    },
  },
  plugins: [],
};
