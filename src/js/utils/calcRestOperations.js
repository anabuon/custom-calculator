export const calcRestOperations = (operation, current) => {
  switch (operation) {
    case '±':
      return current.charAt(0) === '-' ? current.slice(1) : '-' + current
    case '%':
      return current / 100
    case 'x²':
      return Math.pow(current, 2)
    case 'x³':
      return Math.pow(current, 3)
    case 'x<sup>y</sup>':
      return Math.pow(x, y)
    case 'e<sup>x</sup>':
      return 1 / Math.tan(current)
    case '10<sup>x</sup>':
      return 1 / Math.tan(current)
    case '1/x':
      return 1 / current
    case '√x':
      return Math.sqrt(current)
    case '∛‎x':
      return Math.cbrt(current)
    case 'π':
      return Math.PI(current)
    case 'ln':
      return Math.log(current)
    case 'log10':
      return Math.log10(current)
    default:
      return
  }
}

// const fun = (cur) => {
//   if (current.indexOf('^') > -1) {
//     let base = current.slice(0, current.indexOf('^'))
//     let exponent = current.slice(current.indexOf('^') + 1)
//     current = eval('Math.pow(' + base + ',' + exponent + ')')
//   } else {
//     current = eval(current)
//   }
// }
