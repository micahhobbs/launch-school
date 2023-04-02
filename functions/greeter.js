let rlSync = require('readline-sync');

function getName(partOfName) {
  response = rlSync.question(`What is your ${partOfName} name?\n`);
  return response;
}

let firstName = getName('first');
let lastName = getName('last');

console.log(`Your name is ${firstName} ${lastName}!`);
