// SOLUTION:
const someRecursive = (arr, cb) => {
  let result = false;

  const helper = (helperInput, helperCb) => {
    if (helperInput.length === 0) return;
    if (cb(helperInput[0])) return (result = true);

    helper(helperInput.slice(1));
  };

  helper(arr, cb);
  return result;
};

// ALTERNATIVE SOLUTION:
function someRecursive2(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive2(array.slice(1), callback);
}

// TESTS:
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
