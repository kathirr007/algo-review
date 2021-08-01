// Upper Bound: O((n*(2n)!)/(n!(n+1)!)) time | O(n) space
function numberOfBinaryTreeTopologies(n) {
  if (n === 0) return 1;
  let numberOfTrees = 0;
  for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
    const rightTreeSize = n - 1 - leftTreeSize;
    const numberOfLeftTrees = numberOfBinaryTreeTopologies(leftTreeSize);
    const numberOfRightTrees = numberOfBinaryTreeTopologies(rightTreeSize);
    numberOfTrees += numberOfLeftTrees * numberOfRightTrees;
  }
  return numberOfTrees;
}
exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;
