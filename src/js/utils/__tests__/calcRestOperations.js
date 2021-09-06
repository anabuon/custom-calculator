import { calcRestOperations } from '../calcRestOperations'

describe('calcRestOperations', () => {
  it('Sin should work correctly', () => {
    expect(typeof calcRestOperations('sin', 1)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(0)
    expect(calcRestOperations('', 1)).toBeCloseTo(0.84)
  })

  it('Сosine should work correctly', () => {
    expect(typeof calcRestOperations('cos', 0)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(1)
    expect(calcRestOperations('', 5)).toBeCloseTo(0.28)
  })

  it('Tangent should work correctly', () => {
    expect(typeof calcRestOperations('tg', 0)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(0)
    expect(calcRestOperations('', 5)).toBeCloseTo(-3.38)
  })

  it('Cotangent should work correctly', () => {
    expect(typeof calcRestOperations('ctg', 0)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(Infinity)
    expect(calcRestOperations('', 1)).toBeCloseTo(0.64)
  })

  it('Default should return from function', () => {
    expect(calcRestOperations('square', 23)).toBeUndefined()
  })
})
