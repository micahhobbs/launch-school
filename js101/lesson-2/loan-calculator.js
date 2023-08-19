/* eslint-disable max-len */
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

// TODO 
// - Add validation 
// - Add loop to ask again
// - Split out messages into own JSON file

prompt('Welcome to Loan Calculator');

while (true) {

  prompt('How much is your loan?');
  let loanTotal = readline.question();

  while (invalidNumber(loanTotal)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanTotal = readline.question();
  }

  prompt('How much is the the Annual Percentage Rate (APR)?');
  let apr = readline.question();

  while (invalidNumber(apr)) {
    prompt("Hmm... that doesn't look like a valid number.");
    apr = readline.question();
  }

  prompt('How many years is the loan?');
  let loanYears = readline.question();

  while (invalidNumber(loanYears)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanYears = readline.question();
  }

  let monthlyRate = (apr / 100) / 12;
  let loanMonths = loanYears * 12;

  let monthlyPayment = (loanTotal * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanMonths)))));
  let totalPayment = (monthlyPayment * loanMonths).toFixed(2);
  let totalInterest = (totalPayment - loanTotal).toFixed(2);

  console.log(`The monthly payment is $${monthlyPayment.toFixed(2)}.`);
  console.log(`Over ${loanMonths} payments the total payment is $${totalPayment}.`);
  console.log(`Total interest for the loan is ${totalInterest}.`);

  console.log('Would you like to calculate another loan? (Y/N)');
  let loop = readline.question().toLowerCase();

  if (loop === 'n') {
    console.log('Thanks for using loan calculator.');
    break;
  }

}

