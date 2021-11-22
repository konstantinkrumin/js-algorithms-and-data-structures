const mergeArrs = (arr1, arr2) => {
  const newArr = [];

  const longestArrSize = arr1.length > arr2.length ? arr1.length : arr2.length;

  let i = 0;
  let j = 0;
  while (longestArrSize !== i || longestArrSize !== j) {
    if (arr1.indexOf(arr1[i]) === -1) return newArr.concat(arr2.slice(j));
    if (arr2.indexOf(arr2[j]) === -1) return newArr.concat(arr1.slice(i));

    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    }

    if (arr2[j] < arr1[i]) {
      newArr.push(arr2[j]);
      j++;
    }
  }

  return newArr;
};

// TESTS:
// mergeArrs([1,3,4], [2,5,6])
// mergeArrs([1,3,4], [2,5,6,8,99])
// mergeArrs([2,5,6,8,9], [1,3,4])
// mergeArrs([100], [1,3,4,5,6])
// mergeArrs([1,2,3], [])
// mergeArrs([], [])

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return mergeArrs(left, right);
};

// TEST:
// mergeSort([2,1,5,3,99,11,23,12])
