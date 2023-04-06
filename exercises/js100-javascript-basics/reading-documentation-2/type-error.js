// Run the following code.

let tweet = 'Woohoo! :-)';

// if (tweet.length() > 140) {
//   console.log('Tweet is too long!');
// }

// You'll see that it raises an error:

// > Copy Code
// > TypeError: tweet.length is not a function

// .length is a property of string. Not a function.
// remove the parentheses.
// .length() is a function and we're trying to compare that to a number

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}
