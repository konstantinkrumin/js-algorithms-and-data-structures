const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

// TEST:
// maxSubarraySum([100, 200, 300, 400], 2)
