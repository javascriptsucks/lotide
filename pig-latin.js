const args = process.argv.slice(2);

const pigLatin = (arr) => {
  const pigLatinArr = [];
  arr.forEach(word => {
    let wordArr = word.split('');
    const firstLetter = wordArr.shift();
    wordArr.push(firstLetter,'a','y');
    pigLatinArr.push(wordArr.join(''));
  });
  console.log(pigLatinArr);
};


pigLatin(args);
