/*
** What does this code log to the console? Does executing the foo function affect the output? Why or why not?
*/

let bar = 1;
function foo() {
  let bar = 2;
}
foo();
console.log(bar);

/*
** This will log 1 to console.
** foo() will not return anything.
** console.log(bar) will return 1 from the bar variable on the first line.
*/
