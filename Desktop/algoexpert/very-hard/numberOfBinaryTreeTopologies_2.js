// O(n^2) time | O(n) space
function numberOfBinaryTreeTopologies(n, cache = { 0: 1 }) {
  if (n in cache) return cache[n];
  let numberOfTrees = 0;
  for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
    const rightTreeSize = n - 1 - leftTreeSize;
    const numberOfLeftTrees = numberOfBinaryTreeTopologies(leftTreeSize, cache);
    const numberOfRightTrees = numberOfBinaryTreeTopologies(
      rightTreeSize,
      cache
    );
    numberOfTrees += numberOfLeftTrees * numberOfRightTrees;
  }
  cache[n] = numberOfTrees;
  return numberOfTrees;
}
exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;
