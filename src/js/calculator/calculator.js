import { REST_OPERATIONS } from '../utils/constants.js'
import { getDisplayNumber } from '../utils/getDisplayNumber'
import { calcMathOperations } from '../utils/calcMathOperations'
import { calcRestOperations } from '../utils/calcRestOperations'

export default class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.memory = 0
    this.clear()
  }

  clear() {
    this.currentOperand = '0'
    this.previousOperand = ''
    this.operation = undefined
  }

  // saveToMemory() {
  //   this.memory = parseFloat(this.currentOperand)
  // }

  addToMemory() {
    this.memory += parseFloat(this.currentOperand)
  }

  showMemory() {
    this.currentOperand = this.memory
  }

  clearMemory() {
    this.memory = 0
    this.currentOperand = this.memory
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return

    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return

    this.operation = operation

    if (!this._checkIsRest(this.operation) && this.currentOperand !== '') {
      this.calc('math')
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }

    if (this._checkIsRest(this.operation)) {
      this.calc('rest-operation')
    }
  }

  calc(calcType) {
    const current = parseFloat(this.currentOperand)

    if (isNaN(current)) return

    if (calcType === 'math') {
      const prev = parseFloat(this.previousOperand)

      if (isNaN(prev)) return

      this._calcMath(prev, current)
    }

    if (calcType === 'rest-operation') {
      this._calcRest(current)
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = getDisplayNumber(
      this.currentOperand,
    )

    if (!this._checkIsrest(this.operation)) {
      // if (true) {
      this.previousOperandTextElement.innerText = `${getDisplayNumber(
        this.previousOperand,
      )} ${this.operation || ''}`
      return
    }

    this.previousOperandTextElement.innerText = ''
  }

  _checkIsRest(operation) {
    return REST_OPERATIONS.includes(operation)
  }

  _calcMath(prev, current) {
    this.currentOperand = calcMathOperations(this.operation, prev, current)
    this.operation = undefined
    this.previousOperand = ''
  }

  _calcRest(current) {
    this.currentOperand = calcRestOperations(this.operation, current)
  }
}
