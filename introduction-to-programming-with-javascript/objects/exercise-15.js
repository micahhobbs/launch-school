// Identify all of the variables, object property names, primitive values, and objects in the following code.

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');


// Variables
// - bar, ar1, arg2, foo, qux, result

// Object property name
// - abc[[]], def, ghi, jkl, mno, pqr

// Primitive values
// - 'Hello', 1, 2, 3, 4, 5, 6, null, 'Victor', 'Antonina'
// - 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqr'

// Objects
// - bar(), qux, [1, 2, 3, [4, 5, 6]], [4, 5, 6]
