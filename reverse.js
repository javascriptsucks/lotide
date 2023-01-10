const args = process.argv.slice(2);

const reverse = (arr) => {
  arr.forEach(word => {
    let wordArr = word.split('');
    const reverseWord = wordArr.reduceRight((prev,curr) => {
      return prev + curr;
    });
    console.log(reverseWord);
  });
};


reverse(args);
