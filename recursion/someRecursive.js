// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

const someRecursive = (arr, fn) => {
  if (arr.length === 0) return false;
  else if (fn(arr[0])) return true;
  else return someRecursive(arr.slice(1), fn);
};

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
