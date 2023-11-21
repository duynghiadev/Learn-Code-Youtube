class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertTail(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 1 -> 2
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeTail() {
    // 1 -> 2 -> 3 -> null
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next !== null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
    this.tail = prevNode;
  }
}

const list = new LinkedList();
list.insertTail(1);
list.insertTail(2);
list.insertTail(3);
// 1 -> 2 -> 3
