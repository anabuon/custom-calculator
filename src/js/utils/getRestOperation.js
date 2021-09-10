export const getRestOperations = (current) => {
  switch (operation) {
    case '±':
      return `${current}*(-1)`
    case '%':
      return `${current}/100`
    case 'x²':
      return `${current}**2`
    case 'x³':
      return `${current}**3`
    case 'ex':
      return `${Math.E}**${current}`
    case '10x':
      return `10**${current}`
    case '1/x':
      return `1/${current}`
    case '√x':
      return `${current}**(1/2)`
    case '∛‎x':
      return `${current}**(1/3)`
    case 'π':
      return `${Math.PI}`
    default:
      return
  }
}
