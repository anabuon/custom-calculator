import { REST_OPERATIONS } from '../utils/constants.js'
// import { getDisplayNumber } from '../utils/getDisplayNumber'
// import { calcMathOperations } from '../utils/calcMathOperations'
import { calcRestOperations } from '../utils/calcRestOperations'

export default class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.memory = 0
    this.clear()
  }

  clear() {
    this.currentOperand = 0
    this.operation = undefined
    this.previousOperand = ''
    // this.previousOperandTextElement.innerText = ''
  }

  addToMemory() {
    this.memory += parseFloat(this.currentOperand)
  }

  removeToMemory() {
    this.memory -= parseFloat(this.currentOperand)
  }

  showMemory() {
    this.currentOperand = this.memory
  }

  clearMemory() {
    this.memory = 0
    this.currentOperand = this.memory
  }

  insert(string) {
    if (this.currentOperand == '0') {
      this.currentOperand = ''
      this.currentOperand += string
    } else {
      this.currentOperand += string
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
  }

  calc(calcType) {
    const current = this.currentOperand

    if (calcType === 'math') {
      this.currentOperand = eval(current)
      this.previousOperandTextElement.innerText = current
    }

    if (calcType === 'rest-operation') {
      this._calcRest(eval(current))
      this.previousOperandTextElement.innerText = current
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return

    this.operation = operation

    if (this._checkIsRest(this.operation)) {
      this.calc('rest-operation')
    }
  }

  _calcRest(current) {
    this.currentOperand = calcRestOperations(this.operation, current)
  }

  _checkIsRest(operation) {
    return REST_OPERATIONS.includes(operation)
    // return Object.keys(REST_OPERATIONS).includes(operation)
  }
}

//   _calcMath(prev, current) {
//     this.currentOperand = calcMathOperations(this.operation, prev, current)
//     this.operation = undefined
//     this.previousOperand = ''
//   }

// appendNumber(number) {
//   // console.log(number)
//   if (number === '.' && this.currentOperand.includes('.')) return

//   _checkBrackets(string) {
//     this.opens = string.match(/\(/g) || []
//     this.closes = string.match(/\)/g) || []
//     return this.opens.length === this.closes.length
//   }

// changeRest(operation) {
//   const key = Object.keys(REST_OPERATIONS).filter((el) => el === operation)
//   return REST_OPERATIONS[key]
// }
