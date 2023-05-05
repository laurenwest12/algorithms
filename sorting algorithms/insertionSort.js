const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; ++i) {
    let val = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = val;
  }
  return arr;
};
