/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'blanche': '#ffff',
      'couleur1': '#00040f',
      'couleur2': '#00f6f6',
      'couleur3': 'rgba(225,225,225,0.7)',
      'couleur4': 'rgba(9,151,124,0.1)',
    },
    police: {
      poppins: ["poppins", "sans-serif"],

    },
    extend: {},
  },
  plugins: [],
}

