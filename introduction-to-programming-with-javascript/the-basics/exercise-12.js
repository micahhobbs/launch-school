/*
** What value does the following expression evaluate to?
** '12' < '9'
** This is tricky. It will return true. I original thought it would be false.
** Given operands are strings, JS peforms comparisons char by char.
** So therefor '1' is less than '5' so there '12' must be too.
*/

console.log('12' < '9');
