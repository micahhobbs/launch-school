// Write a function that searches an array of strings for every element that matches the regular expression given by its argument.
// The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

// function allMatches(words, regex) {
//   return words.filter(function(word) {
//     if (word.match(regex)) {
//       return word;
//     }
//   });
// }

function allMatches(words, regex) {
  return words.filter(word => {
    return word.match(regex);
  });
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
