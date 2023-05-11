// Write code that removes the items from 'groceryList' one by one, until it is empty. 

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log('logs:')
while (groceryList.length > 0) {
    let item = groceryList.shift();
    console.log(item);
}

groceryList; // []