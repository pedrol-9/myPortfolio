/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // o 'media' si prefieres detectar el modo oscuro automáticamente
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'names': ['Bebas Neue', 'sans-serif'],
        'lastnames': ['Oswald', 'sans-serif'],
        'profession': ['Archivo Black', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // otros plugins
  ],
}

