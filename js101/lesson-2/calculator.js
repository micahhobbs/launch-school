const readline = require ('readline-sync');
const messages = require('./calculator_messages.json');
// import readline from 'readline-sync';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let keepCalculating = true;

prompt(messages.welcome);

while (keepCalculating) {

  prompt(messages.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages.invalidNumber);
    number1 = readline.question();
  }

  prompt(messages.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages.invalidNumber);
    number2 = readline.question();
  }

  console.log(messages.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages.operationChoice);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt(`The result is: ${output}`);

  prompt(messages.anotherCalculation);
  let response = readline.question();

  if (response.toLowerCase() === 'n') {
    keepCalculating = false;
  }
}