const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    const currVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }
  return arr;
};

// TESTS:
// insertionSort([3,1,2,9,76,8])
// insertionSort([221,22,1,24,3,7,4])
// insertionSort([8])
