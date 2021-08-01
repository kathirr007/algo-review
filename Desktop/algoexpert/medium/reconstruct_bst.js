// 6/21/20

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// // Time: O(n^2) | Space: O(n)
function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) return null;

  const currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;

  for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
    const value = preOrderTraversalValues[idx];
    if (value >= currentValue) {
      rightSubtreeRootIdx = idx;
      break;
    }
  }

  const leftSubTree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
  const rightSubTree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
  return new BST(currentValue, leftSubTree, rightSubTree);
}

// Time: O(n) | Space: O(n)
class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo) {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;

  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubtreeInfo.rootIdx++;
  const leftSubTree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo);
  const rightSubTree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo);
  return new BST(rootValue, leftSubTree, rightSubTree);
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
