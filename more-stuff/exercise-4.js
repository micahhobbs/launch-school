// Given a list of numbers, write some code to find and display the largest numeric value in the list.
// List	| Max
// 1, 6, 3, 2 |	6
// -1, -6, -3, -2	| -1
// 2, 2	 | 2

let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

function maxNumber(array) {
  console.log(Math.max(...array));
}

maxNumber(list1);
maxNumber(list2);
maxNumber(list3);
