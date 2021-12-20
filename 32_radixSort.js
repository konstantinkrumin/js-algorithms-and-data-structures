const getDigit = (num, place) => {
  const numStr = Math.abs(num).toString();
  return +numStr.charAt(numStr.length - place - 1);
};

// getDigit(12345, 0) // 5
// getDigit(12345, 1) // 4
// getDigit(12345, 2) // 3
// getDigit(12345, 3) // 2
// getDigit(12345, 4) // 1
// getDigit(12345, 5) // 0

const digitCount = (num) => Math.abs(num).toString().length;

// digitCount(3723728)
// digitCount(3232)
// digitCount(7)

const mostDigits = (numsArr) => {
  let maxDigits = 0;
  numsArr.forEach((currNum) => {
    const currNumLength = digitCount(currNum);
    if (currNumLength > maxDigits) maxDigits = currNumLength;
  });
  return maxDigits;
};

// mostDigits([])
// mostDigits([12, 1313, 234])
// mostDigits([12, 12, 12, 12])
// mostDigits([0, 3523523, 235223, 33])

const radixSort = (arr) => {
  const maxDigits = mostDigits(arr);
  let sortedArr = arr;

  for (let k = 0; k < maxDigits; k++) {
    const bucketsArr = Array.from({ length: 10 }, () => []);
    sortedArr.forEach((num) => {
      const currDigit = getDigit(num, k);
      bucketsArr[currDigit].push(num);
    });

    sortedArr = [].concat(...bucketsArr);
  }

  return sortedArr;
};

// radixSort([325, 32, 1, 0, 2, 2, 6554])
// radixSort([5, 3, 2, 4, 1])
// radixSort([])
