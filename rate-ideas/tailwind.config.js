/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }
    },
  },
  plugins: [],
}

