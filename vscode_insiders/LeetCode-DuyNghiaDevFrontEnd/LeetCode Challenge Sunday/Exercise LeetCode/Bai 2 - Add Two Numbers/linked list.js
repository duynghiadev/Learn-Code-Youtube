function ListNode(value) {
  this.value = value
  this.next = null
}

function linkedListFromArray(arr) {
  if (arr.length === 0) return null // Return null for an empty array

  let head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

const list = linkedListFromArray([6, 10, 12, 3])

console.log(list)
