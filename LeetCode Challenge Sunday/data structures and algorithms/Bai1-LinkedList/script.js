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
    this.count = 0;
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
    this.count++;
  }

  removeTail() {
    // 1 -> 2 -> 3 -> null
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next !== null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    // T
    // 1 -> 2 -> null
    prevNode.next = null;
    this.tail = prevNode;
    this.count--;
  }

  insertHead(val) {
    const newNode = new Node(val);
    // 0 ->
    //      1 -> 2 -> 3
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }
}

const list = new LinkedList();
list.insertTail(1);
list.insertTail(2);
list.insertTail(3);
// T
// 1 -> 2 -> 3
