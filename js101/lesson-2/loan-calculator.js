/* eslint-disable max-len */
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

// TODO 
// - Add validation 
// - Add loop to ask again
// - Split out messages into own JSON file

prompt('Welcome to Loan Calculator');

prompt('How much is your loan?');
let loanTotal = readline.question();

prompt('How much is the the Annual Percentage Rate (APR)?');
let apr = readline.question();

prompt('How long is the loan in years?');
let loanYears = readline.question();

let monthlyRate = (apr / 100) / 12;
let loanMonths = loanYears * 12;

let monthlyPayment = loanTotal * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanMonths))));

console.log(`Your monthly payment will be: $${monthlyPayment.toFixed(2)}`);