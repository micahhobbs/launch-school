// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.
// Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

function isNotANumber(number) {
  // if (number === number) {
  //   return false;
  // } else {
  //   return true;
  // }
  return (number !== number);
}

console.log(`NaN = ${isNotANumber(NaN)}`);
console.log(`'Hello' = ${isNotANumber('Hello')}`);
