const takeUntil = function(array,callback) {
  const arrReturn = [];
  // ...
  for (const ele of array) {
    if (callback(ele)) {
      return arrReturn
    } else {
      arrReturn.push(ele);
    }
  }
  return arrReturn;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//const arr=[]
//for(const num of data1) {
//  console.log((num=>num<0))
//  //if(num < 0) break
//  arr.push(num)
//}

//console.log(arr)
