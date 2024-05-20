let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  // return words.length;
  return words.map((word) => {
    return word.length;
  });
}

const result = getWordLengths(words);
// const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]
