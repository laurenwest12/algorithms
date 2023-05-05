// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = (n) => {
  if (n <= 0) {
    return 0;
  }
  return n + recursiveRange(n - 1);
};

console.log(recursiveRange(0)); // 0
console.log(recursiveRange(2)); // 1
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 21

// 1 + 2 + 3 + 4 + 5 + 6
