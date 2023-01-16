
const head = function(arr) {
  if (!(arr instanceof Array)) return undefined;
  return arr[0];
};

module.exports = head;
