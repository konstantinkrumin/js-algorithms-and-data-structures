const bubbleSort = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

// TESTS:
// bubbleSort([23,14,1,2,23,44,55,5532,45,3])
// bubbleSort([2,3,4,3,34,34])
