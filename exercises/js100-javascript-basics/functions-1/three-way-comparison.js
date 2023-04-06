// Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length.

function compareByLength(firstWord, secondWord) {
  let firstWordLength = firstWord.length;
  let secondWordLength = secondWord.length;
  if (firstWordLength === secondWordLength) {
    return 0;
  } else if (firstWordLength < secondWordLength) {
    return -1;
  } else {
    return 1;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0
