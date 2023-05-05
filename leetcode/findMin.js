// 153. Find Minimum in Rotated Sorted Array
// Medium
// 9.6K
// 452
// Companies
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

var findMin = function (nums) {
  let first = nums[0];
  let last = nums[nums.length - 1];
  if (first < last) return first;

  let min = last;
  for (let i = nums.length - 2; i >= 0; --i) {
    if (nums[i] < min) min = nums[i];
  }
  return min;
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
