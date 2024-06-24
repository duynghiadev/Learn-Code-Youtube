let currentInput = ''
let hasResult = false

function handleInput() {
  hasResult = false
}

function appendToDisplay(value) {
  if (hasResult) {
    clearDisplay()
    hasResult = false
  }
  currentInput += value
  updateDisplay()
}

function clearDisplay() {
  currentInput = ''
  updateDisplay()
}

function calculate() {
  try {
    let result = evaluateExpression(currentInput)
    currentInput = result.toString()
    hasResult = true
    updateDisplay()
  } catch (error) {
    currentInput = 'Error'
    updateDisplay()
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput
}

function evaluateExpression(expression) {
  // Thực hiện tính toán nâng cao tại đây
  // Ví dụ đơn giản: sử dụng hàm `eval` để tính toán
  // Bạn có thể thêm các phép toán nâng cao khác ở đây
  return Function(`'use strict'; return (${expression});`)()
}

// Thêm chức năng căn bậc hai
function squareRoot() {
  try {
    let result = Math.sqrt(parseFloat(currentInput))
    currentInput = result.toString()
    updateDisplay()
  } catch (error) {
    currentInput = 'Error'
    updateDisplay()
  }
}

// Thêm chức năng bình phương
function square() {
  try {
    let result = Math.pow(parseFloat(currentInput), 2)
    currentInput = result.toString()
    updateDisplay()
  } catch (error) {
    currentInput = 'Error'
    updateDisplay()
  }
}

// Thêm chức năng phần trăm
function percentage() {
  try {
    let result = parseFloat(currentInput) / 100
    currentInput = result.toString()
    updateDisplay()
  } catch (error) {
    currentInput = 'Error'
    updateDisplay()
  }
}
