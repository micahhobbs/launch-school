// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter.
// Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce(function(total, currentValue) {
    if ((currentValue.length) % 2 === 1) {
      total.push(currentValue);
    }
    return total;
  }, [])
}
