// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let lowerCaseString = 'launch school tech & talk';
let lowerCaseWordArray = lowerCaseString.split(' '); 
let upperCaseWordArray = [];

for (let index = 0; index < lowerCaseWordArray.length; index++) {
    let word = lowerCaseWordArray[index];
    upperCaseWordArray.push(word[0].toUpperCase() + word.slice(1));
}

console.log(upperCaseWordArray.join(' '));


