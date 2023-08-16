const readline = require('readline-sync');

console.log('Please enter an integer greater than 0:');
const value = readline.question();

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
const action = readline.question();

if (action === 's') {
  let count = 0;
  for (let index = 1; index <= value; index++) {
    count += index;
  }
  console.log(`The sum of the integers between 1 and ${value} is ${count}.`);
}

if (action === 'p') {
  let count = 1;
  for (let index = 1; index <= value; index++) {
    count *= index;
  }
  console.log(`The product of the integers between 1 and ${value} is ${count}.`);
}