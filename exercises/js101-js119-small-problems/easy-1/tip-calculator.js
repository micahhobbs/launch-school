const readline = require('readline-sync');

console.log('What is the bill?');
const bill = Number(readline.question());

console.log('What is the tip percentage?');
const tipPercentage = Number(readline.question());

const tip = bill * (tipPercentage / 100 );
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);