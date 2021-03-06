export const useCalculator = (target, calculator) => {
  switch (target.dataset.type) {
    case 'integer':
      calculator.insert(target.innerText)
      break
    case 'rest-operation':
      calculator.chooseOperation(target.innerText)
      break
    case 'change':
      calculator.changeDisplay(target.dataset.type)
      break
    case 'equals':
      calculator.calc('math')
      break
    case 'all-clear':
      calculator.clear()
      break
    case 'memory-add':
      calculator.addToMemory()
      break
    case 'memory-remove':
      calculator.removeToMemory()
      break
    case 'memory-show':
      calculator.showMemory()
      break
    case 'memory-clear':
      calculator.clearMemory()
      break
    default:
      return
  }
}
