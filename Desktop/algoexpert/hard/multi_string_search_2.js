// O(b^2 + ns) time | O(b^2 + n) space
function multiStringSearch(bigString, smallStrings) {
  const modifiedSuffixTrie = new ModifiedSuffixTrie(bigString);
  return smallStrings.map((string) => modifiedSuffixTrie.contains(string));
}
class ModifiedSuffixTrie {
  constructor(string) {
    this.root = {};
    this.populateModifiedSuffixTrieFrom(string);
  }
  populateModifiedSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }
  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
  }
  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return true;
  }
}
exports.multiStringSearch = multiStringSearch;
