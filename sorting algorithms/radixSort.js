const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; ++i) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 1));
// console.log(digitCount(20));

const radixSort = (nums) => {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; ++k) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; ++i) {
      let lastDigit = getDigit(nums[i], k);
      digitBuckets[lastDigit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
