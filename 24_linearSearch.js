const linearSearch = (arr, val) => {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
};

// TESTS:
// linearSearch([1, 2, 22, 13, 15], 13)
// linearSearch([1, 2, 222, 1312, 15], 222)
// linearSearch([1, 2, 222, 1312, 15], 888)
// linearSearch([100], 100)
// linearSearch([], 17)
