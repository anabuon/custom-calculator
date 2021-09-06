import Calculator from '../calculator'

describe('Calculator', () => {
  let calculator

  beforeEach(() => {
    calculator = new Calculator('', '0')
    calculator.currentOperand = 10
  })

  it('addToMemory method should work correctly', () => {
    calculator.addToMemory()
    expect(calculator.memory).toBe(10)
  })

  it('removeToMemory method should work correctly', () => {
    calculator.addToMemory()
    calculator.currentOperand = 5
    calculator.removeToMemory()
    expect(calculator.memory).toBe(5)
  })

  it('showMemory method should work correctly', () => {
    calculator.addToMemory()
    calculator.currentOperand = 0
    calculator.showMemory()
    expect(calculator.currentOperand).toBe(10)
  })

  it('clearMemory method should work correctly', () => {
    calculator.addToMemory()
    calculator.currentOperand = 16
    calculator.clearMemory()
    expect(calculator.currentOperand).toBe(0)
  })
})
