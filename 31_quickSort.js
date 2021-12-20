const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const arr = [6, 1, 2, 7, 4, 8, 5];
const arr2 = [4, 1, 2, 3];
const arr3 = [4, 1, 2, 2];
const arr4 = [4, 8, 2, 1, 5, 7, 6, 3];
const arr5 = [9, 8, 2, 1, 5, 7, 6, 3];
// pivot(arr)
// quickSort(arr)
