const merge = (arr1, arr2) => {
  let merged = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    }

    if (arr2[j] < arr1[i]) {
      merged.push(arr2[j]);
      j++;
    }

    if (arr1[i] === arr2[j]) {
      merged.push(arr1[i]);
      merged.push(arr2[j]);
      i++;
      j++;
    }
  }

  if (i < arr1.length - 1) {
    merged.concat(arr1.slice(i));
  }

  if (j < arr2.length) {
    console.log(arr2.slice(j));
    merged = merged.concat(arr2.slice(j));
  }

  return merged;
};

console.log(merge([1, 10, 50, 99], [2, 14, 99, 100]));
