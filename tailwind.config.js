const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
    },
  },
  variants: {
    extends: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
