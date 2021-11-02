const isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) return false;

  let checkIndex = 0;
  let checkLetter = str1[checkIndex];

  for (let i = 0; i < str2.length; i++) {
    const currLetter = str2[i];

    if (currLetter === checkLetter) {
      checkIndex++;
      checkLetter = str1[checkIndex];

      if (checkIndex === str1.length) return true;
    }
  }

  return false;
};

// TESTS:
// isSubsequence("hello", "hello world")
// isSubsequence("sing", "sting")
// isSubsequence("abc", "abracadabra")
// isSubsequence("abc", "acb")
