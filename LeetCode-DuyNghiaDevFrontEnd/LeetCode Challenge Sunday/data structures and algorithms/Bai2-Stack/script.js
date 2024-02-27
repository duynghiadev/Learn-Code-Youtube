// Tạo stack với array
const stack_1 = [];

stack_1.push(1);
stack_1.push(2);
stack_1.push(3);

console.log("stack_1:", stack_1);

console.log("Phần tử thứ 1:", stack_1.pop());
console.log("Phần tử thứ 2:", stack_1.pop());
console.log("Phần tử thứ 3:", stack_1.pop());

// Tự định nghĩa stack
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // 2 ->
      //       1
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    // Ban đầu là như này: 3 -> 2 -> 1
    // Sau đó mình gán ngược lại như này: 2 -> 1
    const current = this.top;
    this.top = this.top.next;

    return current;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// Result is: 3,2,1
