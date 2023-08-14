const readline = require ('readline-sync');
const messages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let keepCalculating = true;

prompt(messages.language);

let languageOption = readline.question();
let language;

switch (languageOption) {
  case "1":
    language = 'english';
    break;
  case "2":
    language = 'spanish';
    break;
  case "3":
    language = 'french';
    break;
  default:
    language = 'english';
    break;
}

prompt(messages[language].welcome);

while (keepCalculating) {

  prompt(messages[language].firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages[language].invalidNumber);
    number1 = readline.question();
  }

  prompt(messages[language].secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages[language].invalidNumber);
    number2 = readline.question();
  }

  console.log(messages[language].operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages[language].operationChoice);
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
  prompt(messages[language].result + output);

  prompt(messages[language].anotherCalculation);
  let response = readline.question();

  if (response.toLowerCase() === '2') {
    keepCalculating = false;
    prompt(messages[language].thanks);
  }
}