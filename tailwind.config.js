/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {

      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
        'cursive': ['Dancing Script', 'cursive'],
      },

      backgroundImage: {
        'skills-image': "url(images/skills-bg.jpg)",
      }
    },
  },
  plugins: [],
}
