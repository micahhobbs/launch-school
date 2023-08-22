function penultimate(words) {
  let arrayWords = words.split(' ');
  return arrayWords[arrayWords.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true 