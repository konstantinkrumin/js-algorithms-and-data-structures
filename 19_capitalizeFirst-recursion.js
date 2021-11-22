// SOLUTION:
const capitalizeFirst = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;

    const capitalizedStr = helperInput[0].charAt(0).toUpperCase() + helperInput[0].slice(1);

    result.push(capitalizedStr);
    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

// ALTERNATIVE SOLUTION 1:
const capitalizeFirst2 = (arr) => {
  let newArr = [];

  if (arr.length === 0) return newArr;

  const capitalizedStr = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  newArr.push(capitalizedStr);

  newArr = newArr.concat(capitalizeFirst2(arr.slice(1)));
  return newArr;
};

// ALTERNATIVE SOLUTION 2:
const capitalizeFirst3 = (array) => {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }

  const res = capitalizeFirst3(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
};

// TESTS:
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
// capitalizeFirst([]); // ['Car','Taco','Banana']
