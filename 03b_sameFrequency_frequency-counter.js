const sameFrequency = (num1, num2) => {
  const arr1 = Array.from(String(num1), Number);
  const arr2 = Array.from(String(num2), Number);

  if (arr1.length !== arr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (let key in freq1) {
    if (!freq2[key]) return false;
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
};

// TESTS:
// sameFrequency(182, 821)
// sameFrequency(225, 522)
// sameFrequency(8812258, 8522188)
// sameFrequency(14, 34)
// sameFrequency(22, 222)
