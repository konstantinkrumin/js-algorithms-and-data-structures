const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const arr1MaxVal = Math.max(...arr1);
  const arr2MaxVal = Math.max(...arr2);

  const squaredArr = arr1MaxVal > arr2MaxVal ? arr1 : arr2;
  const notSquaredArr = arr1MaxVal < arr2MaxVal ? arr1 : arr2;

  const updatedArr1 = notSquaredArr.sort((a, b) => a - b).map((num) => num ** 2);
  const updatedArr2 = squaredArr.sort((a, b) => a - b);
  const finalResult = updatedArr2.map((num, i) => {
    const diff = num - updatedArr1[i];
    if (diff !== 0) {
      return false;
    }
    return true;
  });
  return finalResult.includes(false) ? false : true;
};
