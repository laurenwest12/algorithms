class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('Lauren!');

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('there,');
list.push('Lauren.');
list.push('Goodbye!');

const removed = list.pop();
console.log(removed);
console.log(list);

const newTest = new SinglyLinkedList();
const res = newTest.pop();
//console.log(res);
