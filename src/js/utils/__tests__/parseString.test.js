import { parseString } from '../parseString'

describe('parseString', () => {
  it('Apply should work correctly', () => {
    expect(typeof parseString('3+3')).toBe('string')
    expect(parseString('6*2')).toEqual('12')
    expect(parseString('(2+2)*2')).toEqual('8')
    expect(parseString('2+3*2')).toEqual('8')
  })
})
