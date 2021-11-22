// SOLUTION:
const collectStrings = (obj) => {
  const arr = [];

  const helper = (helperObj) => {
    for (const key in helperObj) {
      if (typeof helperObj[key] === 'string') arr.push(helperObj[key]);
      if (typeof helperObj[key] === 'object') helper(helperObj[key]);
    }
  };

  helper(obj);

  return arr;
};

// ALTERNATIVE SOLUTION:
function collectStrings2(obj) {
  var stringsArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings2(obj[key]));
    }
  }

  return stringsArr;
}

// TEST:
const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

// collectStrings(obj) // ["foo", "bar", "baz"])
