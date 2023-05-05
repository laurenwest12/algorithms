const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    let min = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== arr[i]) swap(arr, i, min);
  }
  return arr;
};

console.log(selectionSort([5, 30, 27, 45, 32, 100, 63]));
