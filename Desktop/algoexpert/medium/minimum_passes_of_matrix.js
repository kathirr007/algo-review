// 6/26/21
// Time: O(r*c) | Space: O(r*c)
function minimumPassesOfMatrix(matrix) {
  let queue1 = [];
  let queue2 = [];
  let counter = 0;
  for (row = 0; row < matrix.length; ++row) {
    for (col = 0; col < matrix[0].length; ++col) {
      if (matrix[row][col] > 0) {
        queue1.push({ row, col });
      }
    }
  }

  while (queue1.length !== 0 || queue2.length !== 0) {
    if (queue1.length === 0) {
      dfs(queue2, queue1, matrix);
      ++counter;
    } else if (queue2.length === 0) {
      dfs(queue1, queue2, matrix);
      ++counter;
    }
  }

  const neg = checkIfNegative(matrix);

  return neg === -1 ? neg : counter - 1;
}

function checkIfNegative(matrix) {
  for (const row of matrix) {
    for (const col of row) {
      if (col < 0) return -1;
    }
  }
  return 0;
}

function dfs(queue1, queue2, matrix) {
  while (queue1.length !== 0) {
    let { row, col } = queue1.shift();
    if (col + 1 < matrix[0].length && matrix[row][col + 1] < 0) {
      matrix[row][col + 1] *= -1;
      queue2.push({ row, col: col + 1 });
    }
    if (col - 1 > -1 && matrix[row][col - 1] < 0) {
      matrix[row][col - 1] *= -1;
      queue2.push({ row, col: col - 1 });
    }
    if (row + 1 < matrix.length && matrix[row + 1][col] < 0) {
      matrix[row + 1][col] *= -1;
      queue2.push({ row: row + 1, col });
    }
    if (row - 1 > -1 && matrix[row - 1][col] < 0) {
      matrix[row - 1][col] *= -1;
      queue2.push({ row: row - 1, col });
    }
  }
}

const test = {
  matrix: [
    [0, -1, -3, 2, 0],
    [1, -2, -5, -1, -3],
    [3, 0, 0, -4, -1],
  ],
};
const res = minimumPassesOfMatrix(test.matrix);
console.log(res);
