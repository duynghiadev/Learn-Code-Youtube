// 21: Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // xem list 1 và list 2
  // if list1 < list2 thì point tới list 1, else point tới list 2

  // dùng Dummy node
  const dummy = new ListNode(0, null);
  let head = dummy;

  while (list1 && list2) {
    console.log({
      list: dummy.next,
      head,
      list1Val: list1.val,
      list2Val: list2.val,
    });
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }

  if (list1) {
    head.next = list1;
  }
  if (list2) {
    head.next = list2;
  }

  return dummy.next;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
