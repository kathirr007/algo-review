// 7/6/21
// Time: O(w * n) | Space: O(c)
// w = # of words, n = length of longest word, c = # of unique chars
function minimumCharactersForWords(words) {
  let res = [];
  let maxFreq = {};
  let currentCount = {};
  for (const word of words) {
    word.split("").forEach((letter) => {
      if (letter in currentCount) {
        currentCount[letter] += 1;
      } else {
        currentCount[letter] = 0;
      }
    });
    Object.keys(currentCount).forEach((key) => {
      if (key in maxFreq) {
        maxFreq[key] = Math.max(currentCount[key], maxFreq[key]);
      } else {
        maxFreq[key] = currentCount[key];
      }
    });
    currentCount = {};
  }
  Object.keys(maxFreq).forEach((key) => {
    for (let i = 0; i <= maxFreq[key]; ++i) {
      res.push(key);
    }
  });
  return res;
}
const test = {
  words: ["this", "that", "did", "deed", "them!", "a"],
};
console.log(minimumCharactersForWords(test.words));
