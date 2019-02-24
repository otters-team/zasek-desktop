const randomArrayElement = (array) => array[Math.floor(Math.random() * array.length)]

export const randomGradient = () => {
  let colorsType = [
    'primary', 'secondary', 'accent'
  ]
  let colorShade = [
    'lighten5', 'lighten4', 'lighten3', 'lighten2', 'lighten1', 'base', 'darken1', 'darken2', 'darken3', 'darken4'
  ]

  const secondColor = `var(--v-${randomArrayElement(colorsType)}-${randomArrayElement(colorShade)})`

  return `
  background-color: ${secondColor} !important;
  background-image: linear-gradient(315deg, ${secondColor} 0%, var(--v-primary-base) 100%) !important;
  `
}