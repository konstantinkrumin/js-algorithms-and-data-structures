// # 10 Power Recursion
const power = (base, exp) => {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
};

// EXAMPLE: power(5,3) => 5 * power(5,2) => 5 * 5 * 5 * 1 => 125

// TESTS:
// power(4, 0)
// power (5, 3)
// power(2, 4)

// # 11 Factorial
const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

// TESTS:
// factorial(0)
// factorial(1)
// factorial(3)
// factorial(4)
// factorial(7)

// # 12 Product of Array
const productOfArray = (arr) => {
  if (arr.length === 0) return 0;
  let total = 1;

  const helper = (helperArr) => {
    if (helperArr.length === 0) return;
    total *= helperArr[0];
    helper(helperArr.slice(1));
  };
  helper(arr);

  return total;
};

// TESTS:
// productOfArray([1,2,3])
// productOfArray([1,2,3,10])

// #13 Recursive Range
const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

// TESTS:
// recursiveRange(6)
// recursiveRange(10)
// recursiveRange(0)

// #14 Fibonacci - return nth num
const fib = (num) => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

// EXAMPLES:
// fib(4) => fib(3) + fib(2) => fib(2) + fib(1) + 1 => 1 + 1 + 1 => 3
// fib(5) => fib(4) + fib(3) => fib(3) + fib(2) + fib(2) + fib(1) => fib(2) + fib(1) + 1 + 1 + 1 => 1 + 1 + 1 + 1 + 1 => 5
// fib(6) => fib(5) + fib(4) => fib(4) + fib(3) + fib(3) + fib(2) => fib(3) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) + 1 => fib(2) + fib(1) + 1 + 1 + 1 + 1 + 1 + 1 => 8

// TESTS:
// fib(0)
// fib(4)
// fib(10)
// fib(28)
