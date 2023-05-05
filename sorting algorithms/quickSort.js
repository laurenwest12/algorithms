const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < end; ++i) {
    if (arr[i] < pivot) {
      swapIndex++;
      let temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;
    }
  }

  let temp = arr[swapIndex];
  arr[swapIndex] = arr[start];
  arr[start] = temp;
  // console.log(arr);
  return arr;
};

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const arr = quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(arr);
