const areThereDuplicates = (...args) => {
  const freq = {};

  for (let val of args) {
    freq[val] = (freq[val] || 0) + 1;
    if (freq[val] > 1) return true;
  }

  return false;
};

// TESTS:
// areThereDuplicates(1, 2, 3)
// areThereDuplicates(1, 2, 2)
// areThereDuplicates('a', 'b', 'c')
// areThereDuplicates('a', 'b', 'c', 'a', 'f')
