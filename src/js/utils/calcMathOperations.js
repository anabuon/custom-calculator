function fixDecimal(number) {
  return Number(parseFloat(number).toPrecision(12))
}

export const calcMathOperations = (operation, prev, current) => {
  switch (operation) {
    case 'xy':
      return fixDecimal(Math.pow(prev, current))
    case '+':
      return fixDecimal(prev + current)
    case '-':
      return fixDecimal(prev - current)
    case '*':
      return fixDecimal(prev * current)
    case '÷':
      return fixDecimal(prev / current)
    default:
      return
  }
}
