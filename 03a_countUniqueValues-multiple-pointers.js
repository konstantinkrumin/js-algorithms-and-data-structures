const countUniqueValues = (arr) => {
  let counter = 0;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (left === 0 && right === arr.length - 1 && arr[left] !== arr[right]) counter++;

    if (arr[left + 1] !== arr[left]) counter++;
    if (arr[right - 1] !== arr[right]) counter++;

    left++;
    right--;
  }

  return counter;
};

// TESTS:
// countUniqueValues([1,1,1,1,1,2])
// countUniqueValues([1,2,3,3,4,5,5])
// countUniqueValues([])
// countUniqueValues([-2,-1,-1,0,1])
// countUniqueValues([-2,-1,-1,0,0,0,1,1,1,2,3,4,5,5,6,6,7,7,7,8,8])
