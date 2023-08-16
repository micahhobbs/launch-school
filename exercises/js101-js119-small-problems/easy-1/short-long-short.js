function shortLongShort(firstString, secondString) {
  let shortWord;
  let longWord;
  if (firstString.length < secondString.length) {
    shortWord = firstString;
    longWord = secondString;
  } else {
    shortWord = secondString;
    longWord = firstString;
  }
  return (shortWord + longWord + shortWord);
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));     // "xyz"