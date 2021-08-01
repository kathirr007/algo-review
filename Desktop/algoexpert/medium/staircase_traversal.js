// 7/10/21
// looked at solution

// Time: O(k^n) | Space: O(n)
// n = height, k = # of steps
// function staircaseTraversal(height, maxSteps) {
//   if (height === 0 || height === 1) return 1;

//   let total = 0;
//   for (let i = 1; i < Math.min(maxSteps, height) + 1; ++i) {
//     total += staircaseTraversal(height - i, maxSteps);
//   }
//   return total;
// }

// function staircaseTraversal(height, maxSteps) {
//   return staircaseTraversalHelper(height, maxSteps, { 0: 1, 1: 1 });
// }

// Time: O(n*k) | Space: O(n)
// n = height, k = # of steps
// function staircaseTraversalHelper(height, maxSteps, memo) {
//   if (height in memo) return memo[height];
//   let total = 0;
//   for (let i = 1; i < Math.min(maxSteps, height) + 1; ++i) {
//     total += staircaseTraversalHelper(height - i, maxSteps, memo);
//   }
//   memo[height] = total;
//   return total;
// }

// Time: O(n*k) | Space: O(n)
n = height, k = # of steps
function staircaseTraversal(height, maxSteps) {
  let memo = new Array(height + 1).fill(0);
  memo[0] = 1;
  memo[1] = 1;

  for (let currentHeight = 2; currentHeight < height + 1; ++currentHeight) {
    let step = 1;
    while (step <= maxSteps && step <= currentHeight) {
      memo[currentHeight] = memo[currentHeight] + memo[currentHeight - step];
      ++step;
    }
  }
  return memo[height];
}

const test = {
  // height: 4,
  // maxSteps: 2,
  height: 10,
  maxSteps: 2,
  // height: 100,
  // maxSteps: 1,
};
console.log(staircaseTraversal(test.height, test.maxSteps));
