export const calcRestOperations = (operation, current) => {
  switch (operation) {
    case '±':
      return current * -1
    case '%':
      return current / 100
    case '2n':
      return Math.pow(2, current)
    case 'x²':
      return Math.pow(current, 2)
    case 'x³':
      return Math.pow(current, 3)
    case 'xy':
      return Math.pow(x, y)
    case 'ex':
      return Math.exp(current)
    case '10x':
      return Math.pow(10, current)
    case '1/x':
      return 1 / current
    case '√x':
      return Math.sqrt(current)
    case '∛‎x':
      return Math.cbrt(current)
    case 'π':
      return Math.PI * current
    case 'ln':
      return Math.log(current)
    case 'log10':
      return Math.log10(current)
    default:
      return
  }
}
