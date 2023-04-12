function yellIfLong(word) {
  if (word.length > 10) {
    return word.toUpperCase();
  } else {
    return word;
  }
}

console.log(yellIfLong("micahthompsonhobbs"));
console.log(yellIfLong("hello world"));
console.log(yellIfLong("goodbye"));
