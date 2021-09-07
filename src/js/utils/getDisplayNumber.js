export const getDisplayNumber = (number) => {
  const stringNumber = number
    .toString()
    .replace(/%(\d+(?:\.\d+)?)/g, '*($1/100)')
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]

  let integerDisplay

  if (isNaN(integerDigits)) {
    integerDisplay = ''
  } else {
    integerDisplay = integerDigits.toLocaleString('en', {
      maximumFractionDigits: 0,
    })
  }

  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`
  } else {
    return integerDisplay
  }
}
