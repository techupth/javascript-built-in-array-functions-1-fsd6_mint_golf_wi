let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  // if (words.length >= 5) {
  //   return words;
  // }
  return words.filter((word) => {
    if (word.length >= 5) {
      return word;
    }
  });
}

const result = get5CharWords(words);
// const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
