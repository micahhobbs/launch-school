// function repeat(amount, string) {
//     console.log(string.repeat(amount)); 
// }

function repeat(amount, string) {
    let phrase = '';
    for (let i = 0; i < amount; i++) {
        phrase += string;
    }
    console.log(phrase);
}

repeat(3, 'ha'); // 'hahaha'