/*
** Using arithmetic operators, get the individual digits of a 4-digit number like 4936:
*/

let number = 4936;

let ones = number % 10;
number = (number - ones) / 10;

let tens = number % 10;
number = (number - tens) / 10;

let hundreds = number % 10;
number = (number - hundreds) / 10;

let thousands = number % 10;

console.log(thousands, hundreds, tens, ones);
