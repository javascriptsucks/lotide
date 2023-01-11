//Synch??

const loopyLighthouse1 = ([start,end],[mult1,mult2],[name1,name2]) => {
  const initialTime = new Date();
  //console.log(initialTime);

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
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
  const finalTime = new Date();
  //console.log(finalTime);

  console.log(`Programe taking: ${
    finalTime - initialTime} milliseconds.`);
};

const loopyLighthouse2 = ([num1,num2],[mult1,mult2],[name1,name2]) => {

  const initialTime = new Date();

  const arr = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  for (const num of arr) {
    let output = "";
    if (num % mult1 === 0) {
      output += name1;
    }
    if (num % mult2 === 0) {
      output += name2;
    }
    //console.log(output === "" ? num : output);
  }
  const finalTime = new Date();

  console.log(`Programe taking: ${
    finalTime - initialTime} milliseconds.`);
};

for (let i = 0; i < 21; i++) {
  loopyLighthouse1([15, 99999990], [2, 5], ["Batty", "Beacon"]);
  loopyLighthouse2([15, 99999990], [2, 5], ["Batty", "Beacon"]);

}
