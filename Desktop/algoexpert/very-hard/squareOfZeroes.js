// O(n^4) time | O(n^3) space - where n is the height and width of the matrix
function squareOfZeroes(matrix) {
  const lastIdx = matrix.length - 1;
  return hasSquareOfZeroes(matrix, 0, 0, lastIdx, lastIdx, {});
}
// r1 is the top row, c1 is the left column
// r2 is the bottom row, c2 is the right column
function hasSquareOfZeroes(matrix, r1, c1, r2, c2, cache) {
  if (r1 >= r2 || c1 >= c2) return false;
  const key =
    r1.toString() +
    "-" +
    c1.toString() +
    "-" +
    r2.toString() +
    "-" +
    c2.toString();
  if (key in cache) return cache[key];
  cache[key] =
    isSquareOfZeroes(matrix, r1, c1, r2, c2) ||
    hasSquareOfZeroes(matrix, r1 + 1, c1 + 1, r2 - 1, c2 - 1, cache) ||
    hasSquareOfZeroes(matrix, r1, c1 + 1, r2 - 1, c2, cache) ||
    hasSquareOfZeroes(matrix, r1 + 1, c1, r2, c2 - 1, cache) ||
    hasSquareOfZeroes(matrix, r1 + 1, c1 + 1, r2, c2, cache) ||
    hasSquareOfZeroes(matrix, r1, c1, r2 - 1, c2 - 1, cache);
  return cache[key];
}
// r1 is the top row, c1 is the left column
// r2 is the bottom row, c2 is the right column
function isSquareOfZeroes(matrix, r1, c1, r2, c2) {
  for (let row = r1; row < r2 + 1; row++) {
    if (matrix[row][c1] !== 0 || matrix[row][c2] !== 0) return false;
  }
  for (let col = c1; col < c2 + 1; col++) {
    if (matrix[r1][col] !== 0 || matrix[r2][col] !== 0) return false;
  }
  return true;
}
exports.squareOfZeroes = squareOfZeroes;
