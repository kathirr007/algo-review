class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// O(n + m) time | O(1) space - where n is the number of nodes in the first
// Linked List and m is the number of nodes in the second Linked List
function mergeLinkedLists(headOne, headTwo) {
  let p1 = headOne;
  let p1Prev = null;
  let p2 = headTwo;
  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1Prev !== null) p1Prev.next = p2;
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }
  if (p1 === null) p1Prev.next = p2;
  return headOne.value < headTwo.value ? headOne : headTwo;
}
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;
