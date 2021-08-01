// O(n^2) time | O(n^2) space
function palindromePartitioningMinCuts(string) {
  const palindromes = [];
  for (let i = 0; i < string.length; i++) {
    const row = [];
    for (let j = 0; j < string.length; j++) {
      if (i === j) {
        row.push(true);
      } else {
        row.push(false);
      }
    }
    palindromes.push(row);
  }
  for (let length = 2; length < string.length + 1; length++) {
    for (let i = 0; i < string.length - length + 1; i++) {
      const j = i + length - 1;
      if (length === 2) {
        palindromes[i][j] = string[i] === string[j];
      } else {
        palindromes[i][j] =
          string[i] === string[j] && palindromes[i + 1][j - 1];
      }
    }
  }
  const cuts = new Array(string.length);
  cuts.fill(Infinity);
  for (let i = 0; i < string.length; i++) {
    if (palindromes[0][i]) {
      cuts[i] = 0;
    } else {
      cuts[i] = cuts[i - 1] + 1;
      for (let j = 1; j < i; j++) {
        if (palindromes[j][i] && cuts[j - 1] + 1 < cuts[i]) {
          cuts[i] = cuts[j - 1] + 1;
        }
      }
    }
  }
  return cuts[cuts.length - 1];
}
exports.palindromePartitioningMinCuts = palindromePartitioningMinCuts;
