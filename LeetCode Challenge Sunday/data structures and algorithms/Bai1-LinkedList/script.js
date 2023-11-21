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

  removeHead() {
    if (this.head === null) {
      return;
    }
    // biến đổi 1 -> 2 -> 3 thành 2 -> 3
    this.head = this.head.next;
    this.count--;
  }

  getByIndex(index) {
    if (index < 0) {
      return null;
    }
    // .............
    // Ta có dãy số: 1 -> 2 -> 3 -> 4
    // getByIndex(2) -> index: 2 ==> return 3
    // Lưu ý: mình đang so sánh với số 2. Cho nên đến số 2 count không thể bé hơn 2 nên nó thoát vòng lặp
    let count = 0;
    let currentNode = this.head; // 1
    while (count < index) {
      currentNode = currentNode.next; // 2 // 3
      count++; // 1 // 2
    }
    return currentNode;
  }
}

const list = new LinkedList();
list.insertTail(1);
list.insertTail(2);
list.insertTail(3);
list.insertTail(4);
// T
// 1 -> 2 -> 3 -> 4
