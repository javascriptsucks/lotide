
const loopyLighthouse = ([start,end],[mult1,mult2],[name1,name2]) => {

  let newArr = [];
  for (let i = start; i <= end; i++) {
    if (i % mult1 === 0 && i % mult2 === 0) {
      newArr.push(name1 + name2);
    } else if (i % mult1 === 0) {
      newArr.push(name1);
    } else if (i % mult2 === 0) {
      newArr.push(name2);
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};

module.exports = loopyLighthouse;

//const loopyLighthouse2 = ([num1,num2],[mult1,mult2],[name1,name2]) => {

//  const initialTime = new Date();

//  const arr = [];
//  for (let i = num1; i <= num2; i++) {
//    arr.push(i);
//  }
//  for (const num of arr) {
//    let output = "";
//    if (num % mult1 === 0) {
//      output += name1;
//    }
//    if (num % mult2 === 0) {
//      output += name2;
//    }
//    //console.log(output === "" ? num : output);
//  }
//  const finalTime = new Date();

//  console.log(`Programe taking: ${
//    finalTime - initialTime} milliseconds.`);
//};

console.log(loopyLighthouse([15, 25], [2, 5], ["Batty", "Beacon"]));

