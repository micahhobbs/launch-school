// Identify all of the variables, object property names, primitive
// values, and objects shown in the following code (assume the code has not been executed)

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Variables
// - hello
// - xyzzy
// - greeting
// - name
// - howdy
// - foo

// Object property names
// - xyzzy.a|b|c|d
// - all numbers and letters from object

// Primitive values
// - ' '
// - 'Hi'
// - 'Grace'
// - a, b, c, d (keys are stored as strings)
// - 1, 2, 3, 4, 5

// Objects
// - hello()
// - xyzzy()
// { a: 1, b: 2, c: [3, 4, 5], d: {} }
// [3, 4, 5] (arrays are objects)
// {}
