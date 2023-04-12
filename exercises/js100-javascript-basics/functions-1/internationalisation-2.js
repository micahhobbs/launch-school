function extractLanguage(locale) {
  return locale.substring(0,2);
}

function extractRegion(locale) {
  return locale.substring(3, 5);
}

function greet(language, region) {
  switch (language) {
    case 'en':
      switch (region) {
        case 'US': return 'Hey!'
        case 'GB': return 'Hello!'
        case 'AU': return 'Howdy!'
        default:
          console.log('No English region match');
          break;
      }
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!!'
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!'
    case 'af': return 'Haai!'
    default:
      console.log('No language match');
      break;
  }
}

function localGreet(locale) {
  let languageCode = extractLanguage(locale);
  let regionCode = extractRegion(locale);
  return greet(languageCode, regionCode);
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
