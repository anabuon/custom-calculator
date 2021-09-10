import { actions } from './actions'

export const parseString = (string) => {
  const out = string.match(/\((.*)\)/)
  if (out) {
    const expResult = parseString(out[1])
    string = string.replace(out[0], expResult)
    return calcExpresion(string)
  } else {
    return calcExpresion(string)
  }
}

const calcExpresion = (string) => {
  let res
  Object.keys(actions).map((type) => {
    res = parseExpresion(string, actions[type])
    if (res) {
      string = string.replace(res.string, res.value.toString())
      string = calcExpresion(string)
    }
  })
  return string
}

const parseExpresion = (string, action) => {
  const regExpresion = new RegExp(`((\\d+)\\s*\\${action.value}\\s*(\\d+))`)
  const out = string.match(regExpresion)
  if (!out) return false

  const result = {
    string: out[1],
  }

  result.value = action.func(out[2], out[3])
  return result
}
