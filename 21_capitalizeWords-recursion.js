// SOLUTION:
const capitalizeWords = (arr) => {
  let newArr = [];

  if (arr.length === 0) return newArr;
  newArr.push(arr[0].toUpperCase());

  newArr = newArr.concat(capitalizeWords(arr.slice(1)));

  return newArr;
};

// ALTERNATIVE SOLUTION:
const capitalizeWords2 = (array) => {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let res = capitalizeWords2(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
};

// TESTS:
// capitalizeWords(['i', 'am', 'learning', 'recursion'])
// capitalizeWords([])
