function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
** Using the code from Exercise 9, classify each variable name as either global or local.
** For our purposes here, you may assume that the code from Exercise 9 is the entire program.
**
** Line 1-4:   global = multiply / local = left, right, product
** Line 6-8:   global = getNumber, parseFloat, question / local = prompt
** Line 10-12: global = left, right, getNumber, console, multiply
*/

/*
** Using the code from Exercise 9, are the left and right variables on lines 1 and 2
** the same as the left and right variables on lines 10-12?
** Explain your reasoning.
**
** No they are not the same variables.
** left and right are on line 1 are local variables scoped to that function.
** left and right on 11 and 12 are global variables.
*/
