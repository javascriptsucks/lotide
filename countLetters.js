
const countLetters = (str) => {
  const letterObj = new Object();

  for (let letter of str) {
    if (letter === ' ') {
      continue;
    }
    if (!letterObj[letter]) {
      letterObj[letter] = 1;
    }
    letterObj[letter] += 1;
  }
  return letterObj;
};

module.exports = countLetters;
