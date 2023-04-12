// Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:
// n!	Expansion	Result
// 1!	1	1
// 2!	1 * 2	2
// 3!	1 * 2 * 3	6

function factorial(number) {
  let result = 1; // Initialize the result variable to 1
  for (let counter = number; counter > 0; counter -= 1) { // Loop from the given number down to 1
    result *= counter; // Multiply the result by the current counter value
  }
  return result; // Return the calculated factorial
}

// 5 example
// 1 * 5 = 5
// 5 * 4 = 20
// 20 * 3 = 60
// 60 * 2 = 120
// 120 * 1 = 120


console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
