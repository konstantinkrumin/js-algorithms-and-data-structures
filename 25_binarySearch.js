const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (val > arr[middle]) {
      left = middle + 1;
    } else if (val < arr[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

// TESTS:
// binarySearch([1,2,3,4,5],2)
// binarySearch([1,2,3,4,5],3)
// binarySearch([1,2,3,4,5],5)
// binarySearch([1,2,3,4,5],6)
