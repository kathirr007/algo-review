class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// O(n + m) time | O(n + m) space - where n is the number of nodes in the first
// Linked List and m is the number of nodes in the second Linked List
function mergeLinkedLists(headOne, headTwo) {
  recursiveMerge(headOne, headTwo, null);
  return headOne.value < headTwo.value ? headOne : headTwo;
}
function recursiveMerge(p1, p2, p1Prev) {
  if (p1 === null) {
    p1Prev.next = p2;
    return;
  }
  if (p2 === null) return;
  if (p1.value < p2.value) {
    recursiveMerge(p1.next, p2, p1);
  } else {
    if (p1Prev !== null) p1Prev.next = p2;
    const newP2 = p2.next;
    p2.next = p1;
    recursiveMerge(p1, newP2, p2);
  }
}
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;
