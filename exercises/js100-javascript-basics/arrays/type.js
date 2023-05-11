// or example, imagine you start writing a function and want to check whether its argument is an array

let array = [0, 1, 0, 0, 1];
let string = 'I leave you my Kingdom, take good care of it.';


function filter(input) {
    // Is input an array?
    return ((typeof input === 'object') && (input.length !== undefined));
}

console.log('Array:')
console.log(filter(array))
console.log('Object:')
console.log(filter(string))

// JS also has an input .isArray() method. 