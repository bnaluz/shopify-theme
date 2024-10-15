/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './sections/**/*.liquid',
    './templates/**/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid',
    './**/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
