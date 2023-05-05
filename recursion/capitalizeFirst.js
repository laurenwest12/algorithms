// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

const capitalizeFirst = (arr) => {
  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
  };

  if (arr.length === 1) return [capitalizeString(arr[0])];
  else return [capitalizeString(arr[0])].concat(capitalizeFirst(arr.slice(1)));
};

console.log(capitalizeFirst(['cat', 'bat']));
