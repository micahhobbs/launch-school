// The MDN page for Date lists two methods to get the year of a date.
// What is the difference between the two methods and which one should you use?

let today = new Date();

console.log(today.getYear());
console.log(today.getFullYear());

// getYear returns current year minus 1900.
// getFullYear returns current year.
// Use getFullYear(). getYear() is depreciated.
