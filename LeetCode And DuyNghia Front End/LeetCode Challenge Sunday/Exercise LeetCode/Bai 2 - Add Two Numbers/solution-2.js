/**
 * - Sure, here's another solution that hardcodes the two numbers as linked lists and adds them together:
 *
 * - In this solution, the linked lists representing the two numbers are hardcoded within the script. Then, the addTwoNumbers function is called with these linked lists, and the result is printed using the printLinkedList helper function.
 */

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

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0)
  let current = dummyHead
  let carry = 0

  console.log('Starting addition of two numbers:')
  console.log('-------------------------------')

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0
    let y = l2 !== null ? l2.val : 0
    let sum = carry + x + y

    console.log(`Value of carry: ${carry}`)
    console.log(`Value of x: ${x}`)
    console.log(`Value of y: ${y}`)
    console.log(`Current sum: ${sum}`)
    console.log('-----------------------------')

    carry = Math.floor(sum / 10)

    if (sum >= 10) {
      console.log(`New value of carry (because sum >= 10): ${carry}`)
      console.log('-----------------------------')
    }

    current.next = new ListNode(sum % 10)
    current = current.next

    console.log('Current node 👉:', current)
    console.log('Current val 👉:', current.val)
    console.log('-----------------------------')

    console.log('Dummy Head:', dummyHead)
    console.log('Dummy Head.next:', dummyHead.next)
    console.log('-----------------------------')

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  console.log('Finished addition of two numbers.')
  console.log('-------------------------------')

  return dummyHead.next
}

// Hardcoded linked lists representing the numbers
const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

// Call the function to add the numbers
const result = addTwoNumbers(l1, l2)

// Helper function to print the linked list
function printLinkedList(head) {
  let current = head
  let result = []
  while (current !== null) {
    result.push(current.val)
    current = current.next
  }
  console.log(result.join(' -> '))
}

// Print the result
console.log('Result:🎉')
printLinkedList(result)
