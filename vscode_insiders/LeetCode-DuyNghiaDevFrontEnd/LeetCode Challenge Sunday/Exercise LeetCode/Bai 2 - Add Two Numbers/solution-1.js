/**
 * - This code defines a ListNode class to represent each node in the linked list, and then defines the addTwoNumbers function to perform the addition of two linked lists. It also provides helper functions createLinkedListFromArray and printLinkedList to create and print linked lists, respectively.
 *
 * - The script takes input from the user through the keyboard using Node.js's readline module. It prompts the user to enter the first and second numbers as linked lists, creates the linked lists accordingly, adds them together, and then prints the result.
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

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0
    let y = l2 !== null ? l2.val : 0
    let sum = carry + x + y

    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  return dummyHead.next
}

// Helper function to create a linked list from an array
function createLinkedListFromArray(arr) {
  let dummyHead = new ListNode(0)
  let current = dummyHead

  for (let num of arr) {
    current.next = new ListNode(num)
    current = current.next
  }
  return dummyHead.next
}

// Helper function to print a linked list
function printLinkedList(head) {
  let current = head
  let result = []

  while (current !== null) {
    result.push(current.val)
    current = current.next
  }
  console.log(result.join(' -> '))
}

// Taking input from the user
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Enter the first number as a linked list (e.g., 2 -> 4 -> 3): ', (num1) => {
  const l1 = createLinkedListFromArray(num1.split(' -> ').map(Number))
  readline.question('Enter the second number as a linked list (e.g., 5 -> 6 -> 4): ', (num2) => {
    const l2 = createLinkedListFromArray(num2.split(' -> ').map(Number))
    const result = addTwoNumbers(l1, l2)
    console.log('Result:')
    printLinkedList(result)
    readline.close()
  })
})
