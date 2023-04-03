// What does the following program log to the console? Why?

let foo = {
  a: 'hello', // objects are mutable. This becomes 'hi'.
  b: 'world',
};

let qux = 'hello'; // primitives are not mutable

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi'; // this doesn't change qux on line 8.
}

bar(foo, qux);

console.log(foo.a); // hi
console.log(qux);   // hello
