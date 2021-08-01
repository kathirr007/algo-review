// 6/2/21
// Time: O(n) | Space: O(1)
function generateDocument(characters, document) {
  let charactersDictionary = {};
  for (const c of characters) {
    if (charactersDictionary[c]) charactersDictionary[c] += 1;
    else charactersDictionary[c] = 1;
  }
  for (const d of document) {
    if (charactersDictionary[d]) charactersDictionary[d] -= 1;
    else if (charactersDictionary[d] === 0) return false;
    else return false;
  }
  return true;
}

const test = {
  characters: "Bste!hetsi ogEAxpelrt x ",
  document: "AlgoExpert is the Best!",
};

const res = generateDocument(test.characters, test.document);
console.log(res);
