// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

function oddLengths(array) {
  let lengths = array.map(function(element) {
    return element.length;
  });
  // return filterArray = lengths.filter((item) => item % 2 === 1)
  let filtered = lengths.filter(function(element) {
    if (element % 2 === 1) {
      return element;
    }
  });
  return filtered;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
