// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// Returns array with lengths of words in reverse order

console.log(doSomething("Mike Thompson Hobbs"));
