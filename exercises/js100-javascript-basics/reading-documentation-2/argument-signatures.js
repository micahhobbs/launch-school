// How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

// One optional argument that specifies a seperator.
// If you call it without the optional argument (omitted)
// then the seperator will be a comma.
// Extra arguments are ignored.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
