// 7/7/21
// Time: O(n) | Space: O(n)
function nextGreaterElement(array) {
  let res = new Array(array.length).fill(-1);
  let stack = [];
  for (let i = 0; i < array.length * 2; ++i) {
    const modIdx = i % array.length;
    while (array[modIdx] > array[stack[stack.length - 1]] && stack.length > 0) {
      const top = stack[stack.length - 1];
      res[top] = array[modIdx];
      stack.pop();
    }
    stack.push(modIdx);
  }
  return res;
}

const test = {
  array: [2, 5, -3, -4, 6, 7, 2],
};
console.log(nextGreaterElement(test.array));
