/**
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

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
 var mergeTwoLists = function(l1, l2) {
   let head = null, curr = null, node = null;
   if(l1 === null && l2 === null){
     return head;
   }
   while(l1 !== null || l2 !== null){
     if(l2 === null || l1 !== null && l1.val < l2.val){
       node = new ListNode(l1.val);
       l1 = l1.next;
     } else {
       node = new ListNode(l2.val);
       l2 = l2.next;
     }
     
     if(head === null){
       head = node;
       curr = head;
     } else {
       curr.next = node;
       curr = curr.next;
     }
   } 
   return head;
 }
