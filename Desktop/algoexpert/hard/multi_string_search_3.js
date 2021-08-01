// O(ns + bs) time | O(ns) space
function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  for (const string of smallStrings) {
    trie.insert(string);
  }
  const containedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, trie, containedStrings);
  }
  return smallStrings.map((string) => string in containedStrings);
}
function findSmallStringsIn(string, startIdx, trie, containedStrings) {
  let currentNode = trie.root;
  for (let i = startIdx; i < string.length; i++) {
    const currentChar = string[i];
    if (!(currentChar in currentNode)) break;
    currentNode = currentNode[currentChar];
    if (trie.endSymbol in currentNode)
      containedStrings[currentNode[trie.endSymbol]] = true;
  }
}
class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }
  insert(string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!(string[i] in current)) {
        current[string[i]] = {};
      }
      current = current[string[i]];
    }
    current[this.endSymbol] = string;
  }
}
exports.multiStringSearch = multiStringSearch;
