// SOLUTION:
const nestedEvenSum = (obj) => {
  let sum = 0;

  const helper = (helperObj) => {
    for (const key in helperObj) {
      const currVal = helperObj[key];
      if (typeof currVal === 'number' && currVal % 2 === 0) sum += currVal;
      if (typeof currVal === 'object') helper(currVal);
    }
  };

  helper(obj);

  return sum;
};

// ALTERNATIVE SOLUTION:
const nestedEvenSum2 = (obj, sum = 0) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum2(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

// TESTS:
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10
