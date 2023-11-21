/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  let resultNode = new ListNode((l1.val + l2.val) % 10);
  let tag = Math.floor((l1.val + l2.val) / 10);
  let current = resultNode;
  l1 = l1.next;
  l2 = l2.next;

  while (l1 || l2 || tag !== 0) {
    if (l1) {
      tag += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      tag += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(tag % 10);
    current = current.next;
    tag = Math.floor(tag / 10);
  }
  return resultNode;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
