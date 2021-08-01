// Average case: when the tree is balanced
// O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
function allKindsOfNodeDepths(root) {
  addNodeCounts(root);
  addNodeDepths(root);
  return sumAllNodeDepths(root);
}
function sumAllNodeDepths(node) {
  if (node == null) return 0;
  return (
    sumAllNodeDepths(node.left) +
    sumAllNodeDepths(node.right) +
    node._sumOfDepths
  );
}
function addNodeDepths(node) {
  node._sumOfDepths = 0;
  if (node.left !== null) {
    addNodeDepths(node.left);
    node._sumOfDepths += node.left._sumOfDepths + node.left._numNodesInTree;
  }
  if (node.right !== null) {
    addNodeDepths(node.right);
    node._sumOfDepths += node.right._sumOfDepths + node.right._numNodesInTree;
  }
}
function addNodeCounts(node) {
  node._numNodesInTree = 1;
  if (node.left !== null) {
    addNodeCounts(node.left);
    node._numNodesInTree += node.left._numNodesInTree;
  }
  if (node.right !== null) {
    addNodeCounts(node.right);
    node._numNodesInTree += node.right._numNodesInTree;
  }
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
