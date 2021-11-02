const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1CharFreq = {};
  let str2CharFreq = {};

  str1.split('').forEach((char, idx) => {
    str1CharFreq[char] = (str1CharFreq[char] || 0) + 1;
  });

  str2.split('').forEach((char, idx) => {
    str2CharFreq[char] = (str2CharFreq[char] || 0) + 1;
  });

  for (let char in str1CharFreq) {
    if (!(char in str2CharFreq)) {
      return false;
    }

    if (str1CharFreq[char] !== str2CharFreq[char]) {
      return false;
    }
  }
  return true;
};

// TESTS:
// validAnagram('anagram', 'gramana')
// validAnagram('aaz', 'zza')
// validAnagram('texttwist', 'twisttext')
