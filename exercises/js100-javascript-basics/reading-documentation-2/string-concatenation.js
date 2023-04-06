// Find out how we can join two or more strings together.

// Use the .concat(seperator, string) method

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

// Or use the addition operator

console.log(str1 + ' ' + str2);
console.log(str1 + ', ' + str2);
