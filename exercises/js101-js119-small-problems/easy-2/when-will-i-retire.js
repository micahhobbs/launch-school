const readline = require('readline-sync');

console.log('What is your age?');
let currentAge = readline.question();

console.log('At what age would you like to retire?');
let retirementAge = readline.question();

const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
const currentYear = 2017;

const yearsUntilRetirement = retirementAge - currentAge;

console.log(`It's ${currentYear} You will retire in ${currentYear + yearsUntilRetirement}`);
console.log(`You have only ${yearsUntilRetirement} years of work to go!`);