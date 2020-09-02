const defaults = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
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
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-debug-screens'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.njk',
    './src/**/*.svg',
  ],
}
