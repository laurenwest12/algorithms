/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

const sameFrequency = (int1, int2) => {
  // Convert the integers into strings so we can compare lengths and make a lookup table with looping.
  const str1 = int1.toString();
  const str2 = int2.toString();
  // Create a lookup table that will take the first integer and make a frequency table for each int in the total int.
  const lookup = {};

  //Loop through the first string and add the frequency.
  for (let l of str1) {
    lookup[l] = (lookup[l] || 0) + 1;
  }

  // Loop through the second string made. If the current int is not in the lookup table, return false. Otherwise, subtract from the frequency table.
  // If something is 0 and you try to do a lookup, it will return a falsey value and this will trigger the lookup to return false.
  for (let l of str2) {
    if (!lookup[l]) {
      return false;
    } else {
      lookup[l] -= 1;
    }
  }

  // Return true if it makes it.
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
