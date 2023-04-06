// There are other ways to detect a -0 value. Without using Object.is,
// write a function that will return true if the argument is -0, and false if it is 0 or any other number.

function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}

// This one was tough. Didn't get it. Will need to understand more.
