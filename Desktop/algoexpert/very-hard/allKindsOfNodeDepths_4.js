// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
function allKindsOfNodeDepths(root) {
  return getTreeInfo(root).sumOfAllDepths;
}
function getTreeInfo(tree) {
  if (tree === null) {
    return {
      numNodesInTree: 0,
      sumOfDepths: 0,
      sumOfAllDepths: 0,
    };
  }
  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);
  const sumOfLeftDepths =
    leftTreeInfo.sumOfDepths + leftTreeInfo.numNodesInTree;
  const sumOfRightDepths =
    rightTreeInfo.sumOfDepths + rightTreeInfo.numNodesInTree;
  const numNodesInTree =
    1 + leftTreeInfo.numNodesInTree + rightTreeInfo.numNodesInTree;
  const sumOfDepths = sumOfLeftDepths + sumOfRightDepths;
  const sumOfAllDepths =
    sumOfDepths + leftTreeInfo.sumOfAllDepths + rightTreeInfo.sumOfAllDepths;
  return {
    numNodesInTree,
    sumOfDepths,
    sumOfAllDepths,
  };
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
exports.allKindsOfNodeDepths = allKindsOfNodeDepths;
