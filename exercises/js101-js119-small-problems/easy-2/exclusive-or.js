// function xor(arg1, arg2) {
//   return ((arg1 && !arg2) || (arg2 && !arg1));
// }

function xor(arg1, arg2) {
  if ((arg1 && !arg2) || (arg2 && !arg1)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

console.log(xor(true, false)); // Should log: true
console.log(xor(false, true)); // Should log: true
console.log(xor(true, true));  // Should log: false
console.log(xor(false, false));// Should log: false
console.log(xor(0, 1));        // Should log: true
console.log(xor(1, 0));        // Should log: true
console.log(xor(1, 1));        // Should log: false
console.log(xor(0, 0));        // Should log: false
console.log(xor("", "hello")); // Should log: true
console.log(xor(null, []));    // Should log: true
console.log(xor(undefined, 0));// Should log: false