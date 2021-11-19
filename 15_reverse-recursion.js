// SOLUTION:
const reverse = (str) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    result.push(helperInput[helperInput.length - 1]);
    helper(helperInput.slice(0, helperInput.length - 1));
  };

  helper(str.split(''));
  return result.join('');
};

// ALTERNATIVE SOLUTION:
function reverse2(str) {
  console.log(str);
  if (str.length <= 1) return str;
  return reverse2(str.slice(1)) + str[0];
}

// TESTS:
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
