// 6/28/21
// Time: O(nlogn) | Space: O(n)
function taskAssignment(k, tasks) {
  let res = [];
  for (let i = 0; i < tasks.length; ++i) {
    tasks[i] = [tasks[i], i];
  }
  tasks.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < tasks.length / 2; ++i) {
    res.push([tasks[i][1], tasks[tasks.length - 1 - i][1]]);
  }

  return res;
}

const test = {
  k: 3,
  tasks: [1, 3, 5, 3, 1, 4],
};

const res = taskAssignment(test.k, test.tasks);
console.log(res);
