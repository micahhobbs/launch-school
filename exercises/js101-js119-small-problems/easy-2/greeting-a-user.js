const readline = require('readline-sync');

console.log('What is your name?');
let name = readline.question();
let lastChar = name[name.length - 1];

if (lastChar === '!') {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}