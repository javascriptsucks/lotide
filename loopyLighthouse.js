const loopyLighthouse = ([start, end], [mult1, mult2], [name1, name2]) => {
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
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
