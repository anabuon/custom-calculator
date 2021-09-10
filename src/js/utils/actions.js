export const actions = {
  multiplication: {
    value: '*',
    label: 'multiplication',
    func: (a, b) => parseInt(a) * parseInt(b),
  },
  division: {
    value: '/',
    label: 'division',
    func: (a, b) => a / b,
  },
  addition: {
    value: '+',
    label: 'addintion',
    func: (a, b) => parseInt(a) + parseInt(b),
  },
  subtraction: {
    value: '-',
    label: 'subtraction',
    func: (a, b) => parseInt(a) - parseInt(b),
  },
}
