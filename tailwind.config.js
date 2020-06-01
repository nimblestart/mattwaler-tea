const fontSizes = [14, 16, 18, 20, 24, 30, 36, 42, 48, 60]
const fontWeights = [400, 700, 900]
const percents = [25, 40, 50, 60, 100]
const rems = [1, 4, 8, 12, 16, 24, 32, 48, 56, 64, 96, 128, 180, 256, 320, 480]
const screens = [640, 768, 960]
const viewports = [100]

const rem = (value) => `${value / 16}rem`

const fontSizeObject = {}
fontSizes.forEach((value) => {
  fontSizeObject[value] = rem(value)
})

const fontWeightObject = {}
fontWeights.forEach((value) => {
  fontWeightObject[value] = value
})

const percentObject = { '33%': '33.3333%', '66%': '66.6666%' }
percents.forEach((value) => {
  percentObject[`${value}%`] = `${value}%`
})

const remObject = {}
rems.forEach((value) => {
  remObject[value] = rem(value)
})
screens.forEach((value) => (remObject[value] = rem(value)))

const negativeRems = rems.map((value) => `-${value}`)
const negativeRemObject = {}
negativeRems.forEach((value) => {
  negativeRemObject[value] = rem(value)
})

const screenObject = {}
screens.forEach((value) => {
  screenObject[`${value}`] = `${value}px`
})

const viewportObject = {}
viewports.forEach((value) => {
  viewportObject[`${value}vw`] = `${value}vw`
  viewportObject[`${value}vh`] = `${value}vh`
})

const spacing = {
  0: '0',
  auto: 'auto',
  ...remObject,
  ...percentObject,
  ...viewportObject,
}

module.exports = {
  corePlugins: {
    container: false,
  },
  theme: {
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
    fontSize: fontSizeObject,
    fontWeight: fontWeightObject,
    gap: remObject,
    height: spacing,
    margin: { ...spacing, ...negativeRemObject },
    maxHeight: spacing,
    maxWidth: spacing,
    minHeight: spacing,
    minWidth: spacing,
    padding: spacing,
    screens: screenObject,
    width: spacing,
  },
  plugins: [require('@tailwindcss/custom-forms')],
  purge: [
    './src/**/*.js',
    './src/**/*.njk',
    './src/**/*.svelte',
    './src/**/*.svg',
  ],
}
