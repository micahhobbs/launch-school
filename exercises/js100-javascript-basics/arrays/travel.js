let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
'Marrakesh', 'New York City'];

function contains(target, cities) {
    for (const city of cities) {
        if (city === target) {
            return true;
        }
    }
    return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false