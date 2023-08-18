function multisum(number) {
  let total = 0;
  for (let start = 1; start <= number; start += 1) {
    if (start % 3 === 0 || start % 5 === 0) {
      total += start;
    }
  }
  // return total;
  console.log(total);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168