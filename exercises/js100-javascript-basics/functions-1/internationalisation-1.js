// Write a function that takes an ISO 639-1 language code and returns a greeting in that language.

function greet(code) {
  switch (code) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!!'
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!'
    case 'af': return 'Haai!'
    default:
      console.log('No match');
      break;
  }
}

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'
