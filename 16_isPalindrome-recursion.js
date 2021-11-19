// SOLUTION:
const isPalindrome = (str) => {
  let newArr = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    newArr.push(helperInput[helperInput.length - 1]);
    helper(helperInput.slice(0, helperInput.length - 1));
  };

  helper(str);

  return newArr.join('') === str;
};

// ALTERNATIVE SOLUTION:
function isPalindrome2(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome2(str.slice(1, -1));
  return false;
}

// TESTS:
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
