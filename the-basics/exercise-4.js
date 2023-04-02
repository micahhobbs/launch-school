/*
** Explain why this code logs '510' instead of 15.
*/

console.log('5' + 10);

/*
** JavaScript implicity coerces the Number data type into a string.
** Every expression that has a String operand produces a string result.
*/

console.log(5 + '10'); // Still produces a String.
