var isAnagram = function (s, t) {
  let arr1 = s.split('');
  let arr2 = t.split('');

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[arr1.length - i - 1] !== arr2[i]) return false;
  }

  return true;
};

console.log(isAnagram('cat', 'tac'));
