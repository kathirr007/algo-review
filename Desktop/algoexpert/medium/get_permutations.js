// 7/10/21
// looked at solution
function getPermutations(array) {
  let permutations = [];
  let currentPermnutation = [];
  getPermutationsHelper(array, currentPermnutation, permutations);
  return permutations;
}

function getPermutationsHelper(array, currentPermnutation, permutations) {
  if (array.length === 0 && currentPermnutation.length) {
    permutations.push(currentPermnutation);
  } else {
    for (const num of array) {
      let newArray = removeNumFromArray(num, array);
      let newPermutation = currentPermnutation.concat([num]);
      getPermutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

function removeNumFromArray(num, array) {
  return array.filter((n) => n !== num);
}

const test = {
  array: [1, 2, 3],
};
console.log(getPermutations(test.array));
