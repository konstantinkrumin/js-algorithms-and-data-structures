const averagePair = (arr, compareVal) => {
  if (arr.length < 2) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;

    if (average > compareVal) {
      right--;
    } else if (average < compareVal) {
      left++;
    } else {
      return true;
    }
  }

  return false;
};

// TESTS:
// averagePair([1, 2, 3], 2.5)
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
// averagePair([-1, 0, 3, 4, 5, 6], 4.1)
// averagePair([], 4)
