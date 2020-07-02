module.exports = {
  theme: {
    container: false,
    customForms: (theme) => ({
      default: {
        'input, textarea': {
          '&:focus': {
            borderColor: theme('colors.indigo.500'),
            boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.5)',
          },
        },
      },
    }),
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
  purge: [
    './src/**/*.js',
    './src/**/*.njk',
    './src/**/*.svelte',
    './src/**/*.svg',
  ],
}
