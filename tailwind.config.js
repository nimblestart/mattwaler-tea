module.exports = {
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
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
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.njk',
    './src/**/*.svg',
  ],
}
