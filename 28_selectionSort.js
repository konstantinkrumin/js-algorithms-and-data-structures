// SOLUTION:
const selectionSort = (arr) => {
  let startIdx = 0;
  let minValIdx = 0;

  while (startIdx <= arr.length - 1) {
    for (let i = startIdx; i < arr.length; i++) {
      if (arr[i] < arr[minValIdx]) minValIdx = i;
    }

    if (arr[minValIdx] < arr[startIdx]) {
      const temp = arr[startIdx];
      arr[startIdx] = arr[minValIdx];
      arr[minValIdx] = temp;
    }

    startIdx++;
    minValIdx = startIdx;
  }

  return arr;
};

// ALTERNATIVE SOLUTION:
const selectionSort2 = (arr) => {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
};

// TESTS:
// selectionSort([11,2,3,15,12,77,34,3,11,2])
// selectionSort([112,233,111,222,32])
// selectionSort([12,11,9,6,4])
// selectionSort([7])
