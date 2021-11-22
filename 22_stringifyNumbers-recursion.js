// SOLUTION:
const stringifyNumbers = (obj) => {
  const newObj = JSON.parse(JSON.stringify(obj));

  const helper = (helperObj) => {
    for (const key in helperObj) {
      if (typeof helperObj[key] === 'number') helperObj[key] = helperObj[key].toString();
      if (typeof helperObj[key] === 'object' && !Array.isArray(helperObj[key])) helper(helperObj[key]);
    }
  };

  helper(newObj);

  return newObj;
};

// ALTERNATIVE SOLUTION:
const stringifyNumbers2 = (obj) => {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers2(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

// TESTS:
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// stringifyNumbers(obj)

// RESULT:
/*
  {
      num: "1",
      test: [],
      data: {
          val: "4",
          info: {
              isRight: true,
              random: "66"
          }
      }
  }
  */
