const tail = function(arr) {
  if (!(arr instanceof Array) || arr.length === 0) return undefined;
  if (arr.length === 1) return arr;
  return arr.slice(1);
};


module.exports = tail;


