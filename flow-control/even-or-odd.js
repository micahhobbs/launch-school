function evenOrOdd(num) {
  if (typeof num !== 'number') { // could also used Number.isInteger(num)
    console.log('That is not a number');
    return;
  } else {
    num % 2 === 0 ? console.log('even') : console.log('odd');
  }
}

evenOrOdd(1)
evenOrOdd(2)
evenOrOdd('')
evenOrOdd(3)
evenOrOdd(4)
