/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.

 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
   var map = [], prev = head, current = null;
   if(!prev){
       return head;
   }
   map[prev.val] = true;
   while(prev.next){
       current = prev.next;
       if(map[current.val]){
         prev.next = current.next;
       } else {
         map[current.val] = true;
         prev = current;
       }
   }
   return head; 
 }
