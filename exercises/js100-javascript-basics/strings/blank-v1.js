// Write a function that checks whether a string is empty or not.

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

function isBlank(string) { 
    return string.length === 0;
}

console.log(isBlank('mars'));
console.log(isBlank('  '));  
console.log(isBlank(''));    