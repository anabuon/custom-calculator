import { calcMathOperations } from '../calcMathOperations'

describe('calcMathOperations', () => {
  it('Apply should work correctly', () => {
    expect(typeof calcMathOperations('+', 0, 0)).toBe('number')
    expect(calcMathOperations('+', 0, 0)).toEqual(0)
    expect(calcMathOperations('+', 2, 2)).toEqual(4)
    expect(calcMathOperations('+', 0.1, 0.2)).toEqual(0.3)
    expect(calcMathOperations('+', 0.003, 0.2)).toEqual(0.203)
  })

  it('Substract should work correctly', () => {
    expect(typeof calcMathOperations('-', 10, 5)).toBe('number')
    expect(calcMathOperations('-', 10, 5)).toEqual(5)
    expect(calcMathOperations('-', 0, 5)).toEqual(-5)
    expect(calcMathOperations('-', 0.3, 0.1)).toEqual(0.2)
  })

  it('Multiply should work correctly', () => {
    expect(typeof calcMathOperations('*', 2, 5)).toBe('number')
    expect(calcMathOperations('*', 2, 5)).toEqual(10)
    expect(calcMathOperations('*', 0, 5)).toEqual(0)
  })

  it('Divide should work correctly', () => {
    expect(typeof calcMathOperations('÷', 10, 5)).toBe('number')
    expect(calcMathOperations('÷', 10, 5)).toEqual(2)
    expect(calcMathOperations('÷', 0, 5)).toEqual(0)
    expect(calcMathOperations('÷', 5, 0)).toEqual(Infinity)
  })

  it('Default should return from function', () => {
    expect(calcMathOperations(':', 10, 5)).toBeUndefined()
  })
})
