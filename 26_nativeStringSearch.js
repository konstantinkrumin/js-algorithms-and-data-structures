const naiveStringSearch = (str, substr) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      let mainChar = str[i];
      let substrChar = substr[j];

      if (mainChar !== substrChar) break;
      if (mainChar === substrChar) mainChar = str[i++];

      if (j === substr.length - 1) count++;
    }
  }

  return count;
};

// TESTS:
// naiveStringSearch('hhggwyomjjdhomghqqomg', 'omg')
// naiveStringSearch('hhggwyomcostahomghqcosthgcostasdsdscosta', 'costa')
// naiveStringSearch('hhggwyomjjdhomgbeqomg', 'benz')
