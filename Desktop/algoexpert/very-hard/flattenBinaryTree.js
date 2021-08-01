class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
function flattenBinaryTree(root) {
  const inOrderNodes = getNodesInOrder(root, []);
  for (let i = 0; i < inOrderNodes.length - 1; i++) {
    const leftNode = inOrderNodes[i];
    const rightNode = inOrderNodes[i + 1];
    leftNode.right = rightNode;
    rightNode.left = leftNode;
  }
  return inOrderNodes[0];
}
function getNodesInOrder(tree, array) {
  if (tree !== null) {
    getNodesInOrder(tree.left, array);
    array.push(tree);
    getNodesInOrder(tree.right, array);
  }
  return array;
}
exports.BinaryTree = BinaryTree;
exports.flattenBinaryTree = flattenBinaryTree;
