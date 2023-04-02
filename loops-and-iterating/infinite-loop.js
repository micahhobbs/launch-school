// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {   // this line always resets counter equal to 1. Its not checking equality. It never becomes false.
  console.log(counter); // this logs 1
  counter += 1;         // counter is incremented to 2

  if (counter > 2) {    // counter is not great than 2 so not entered
    break;
  }
}
