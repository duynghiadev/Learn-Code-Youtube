/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0)
  let current = dummyHead
  let carry = 0

  console.log('⚙️ Adding two numbers:')

  while (l1 !== null || l2 !== null) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const sum = val1 + val2 + carry

    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next

    console.log(`   Adding ${val1} and ${val2} with carry ${carry}: ${sum % 10}`)

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
    console.log(`   Adding carry ${carry}: ${carry}`)
  }

  console.log('✅ Addition complete!')
  return dummyHead.next
}

// Example usage:
const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log('Input lists:')
console.log('List 1:', JSON.stringify(l1))
console.log('List 2:', JSON.stringify(l2))

const result = addTwoNumbers(l1, l2)

console.log('Output:')
console.log(JSON.stringify(result))
