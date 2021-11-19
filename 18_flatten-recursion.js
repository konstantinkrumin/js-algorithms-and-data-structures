// SOLUTION:
const flatten = (arr) => {
  const result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;

    const currItem = helperInput[0];

    if (Array.isArray(currItem)) result.push(helper(currItem));
    if (typeof currItem === 'number') result.push(currItem);

    helper(helperInput.slice(1));
  };

  helper(arr);
  return result.filter((val) => typeof val === 'number');
};

// ALTERNATIVE SOLUTION:
function flatten2(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten2(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// TESTS:
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
