//     "It's a beautiful day!" if weather is assigned to the string "sunny",
//     "Grab your umbrella." if weather is assigned to the string "rainy", and
//     "Let's stay inside." otherwise.

const weather = 'rainy'

switch (weather) {
    case 'sunny':
        console.log("It's a beautiful day!");
        break;
    case 'rainy':
        console.log("Grab your umbrella.");
        break;
    default:
        console.log("Let's stay inside.")
}