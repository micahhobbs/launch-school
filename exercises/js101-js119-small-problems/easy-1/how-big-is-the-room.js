const readline = require('readline-sync');

console.log('Enter the length of the room in meters:');
const length = readline.question();

console.log('Enter the width of the room in meters:');
const width = readline.question();

const squareMeters = (length * width).toFixed(2);
const squareMeterToFeetRatio = 10.7639;
const squareFeet = (squareMeters * squareMeterToFeetRatio).toFixed(2);

console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`);