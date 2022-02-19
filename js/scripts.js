function add(n1, n2) {
  return n1 + n2
}

function subtract(n1, n2) {
  return n1 - n2
}

function multiply(n1, n2) {
  return n1 * n2
}

function divide(n1, n2) {
  return n1 / n2
}

const number1 = parseInt(prompt("Enter a number: "))
const number2 = parseInt(prompt("Enter another: "))
const result = add(number1, number2)

alert("The sum is: " + result)
