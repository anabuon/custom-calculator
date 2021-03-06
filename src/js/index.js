import Calculator from './calculator/calculator'
import { useCalculator } from './utils/useCalculator'

const calculatorElement = document.querySelector('.calculator-screen')
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]',
)
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]',
)

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement,
)

const onCalculatorButtonClick = (evt) => {
  useCalculator(evt.target, calculator)
  calculator.updateDisplay()
}

calculatorElement.addEventListener('click', onCalculatorButtonClick)
