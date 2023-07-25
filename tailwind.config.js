/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/team.png')",
      },
    },
    themes: ["light", "cupcake"],
  },
  plugins: [],
};
