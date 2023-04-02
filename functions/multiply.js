let rlSync = require('readline-sync');

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function askUserNumber(prompt) {
  let number = Number(rlSync.question(prompt));
  return number;
}

let firstNumber = askUserNumber('Enter the first number: ')
let secondNumber = askUserNumber('Enter the second number: ')

let total = multiply(firstNumber, secondNumber);

console.log(`${firstNumber} * ${secondNumber} = ${total}`)
