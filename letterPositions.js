const letterPositions = function(sentence) {
  const results = {};
  const strSpc = sentence.toLowerCase();
  for (let i = 0; i < strSpc.length; i++) {
    if (strSpc[i] === ' ') break;
    if (results[strSpc[i]]) {
      results[strSpc[i]].push(i);
    } else {
      results[strSpc[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
