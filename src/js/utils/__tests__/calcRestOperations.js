import { calcRestOperations } from '../calcRestOperations'

describe('calcRestOperations', () => {
  it('% should work correctly', () => {
    expect(typeof calcRestOperations('%', 1)).toBe('number')
    expect(calcRestOperations('%', 0)).toEqual(0)
    expect(calcRestOperations('%', 1)).toBeCloseTo(0.01)
    expect(calcRestOperations('%', 0.01)).toBeCloseTo(0.0001)
  })

  it('2^n should work correctly', () => {
    expect(typeof calcRestOperations('2n', 0)).toBe('number')
    expect(calcRestOperations('2n', 0)).toEqual(1)
    expect(calcRestOperations('2n', 1)).toEqual(2)
    expect(calcRestOperations('2n', -1)).toBeCloseTo(0.5)
  })

  it('x² should work correctly', () => {
    expect(typeof calcRestOperations('x²', 0)).toBe('number')
    expect(calcRestOperations('x²', 0)).toEqual(0)
    expect(calcRestOperations('x²', -2)).toEqual(4)
    expect(calcRestOperations('x²', 2)).toEqual(4)
    expect(calcRestOperations('x²', 0.5)).toBeCloseTo(0.25)
  })

  it('x³ should work correctly', () => {
    expect(typeof calcRestOperations('x³', 0)).toBe('number')
    expect(calcRestOperations('x³', 0)).toEqual(0)
    expect(calcRestOperations('x³', -2)).toEqual(-8)
    expect(calcRestOperations('x³', 1)).toEqual(1)
    expect(calcRestOperations('x³', 0.5)).toBeCloseTo(0.125)
  })

  // it('x^y should work correctly', () => {
  //   expect(typeof calcRestOperations('x^y', 0)).toBe('number')
  //   expect(calcRestOperations('', 0)).toEqual(Infinity)
  //   expect(calcRestOperations('', 1)).toBeCloseTo(0.64)
  // })

  it('e^x should work correctly', () => {
    expect(typeof calcRestOperations('ex', 0)).toBe('number')
    expect(calcRestOperations('ex', 0)).toEqual(1)
    expect(calcRestOperations('ex', 1)).toBeCloseTo(2.718)
  })

  it('10^x should work correctly', () => {
    expect(typeof calcRestOperations('10x', 0)).toBe('number')
    expect(calcRestOperations('10x', 0)).toEqual(1)
    expect(calcRestOperations('10x', 1)).toBeCloseTo(10)
  })

  it('1/x should work correctly', () => {
    expect(typeof calcRestOperations('1/x', 0)).toBe('number')
    expect(calcRestOperations('1/x', 0)).toEqual(Infinity)
    expect(calcRestOperations('1/x', 1)).toEqual(1)
    expect(calcRestOperations('1/x', 2)).toEqual(0.5)
    expect(calcRestOperations('1/x', 2)).toEqual(0.5)
    expect(calcRestOperations('1/x', -0.5)).toEqual(-2)
  })

  it('√x should work correctly', () => {
    expect(typeof calcRestOperations('√x', 0)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(Infinity)
    expect(calcRestOperations('', 1)).toBeCloseTo(0.64)
  })

  it('∛‎x should work correctly', () => {
    expect(typeof calcRestOperations('∛‎x', 0)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(Infinity)
    expect(calcRestOperations('', 1)).toBeCloseTo(0.64)
  })

  it('π should work correctly', () => {
    expect(typeof calcRestOperations('π', 0)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(Infinity)
    expect(calcRestOperations('', 1)).toBeCloseTo(0.64)
  })

  it('ln should work correctly', () => {
    expect(typeof calcRestOperations('ln', 0)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(Infinity)
    expect(calcRestOperations('', 1)).toBeCloseTo(0.64)
  })

  it('log10 should work correctly', () => {
    expect(typeof calcRestOperations('log10', 0)).toBe('number')
    expect(calcRestOperations('', 0)).toEqual(Infinity)
    expect(calcRestOperations('', 1)).toBeCloseTo(0.64)
  })

  it('Default should return from function', () => {
    expect(calcRestOperations('square', 23)).toBeUndefined()
  })
})
