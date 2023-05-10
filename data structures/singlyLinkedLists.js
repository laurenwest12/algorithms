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

  shift() {
    if (!this.head) return undefined;
    let originalHead = this.head;
    this.head = originalHead.next;
    this.length--;
    return originalHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.tail = newHead;
    } else {
      newHead.next = this.head;
    }
    this.head = newHead;
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('there,');
list.push('Lauren.');
list.push('Goodbye!');

const emptyList = new SinglyLinkedList();

// const removed = list.pop();
// console.log(removed);
// console.log(list);

// const newTest = new SinglyLinkedList();
// const res = newTest.pop();
//console.log(res);

// const shift = list.shift();
// console.log(shift, list);

const unshift = list.unshift('Howdy');
console.log(unshift);

const unshiftEmpty = emptyList.unshift('Howdy');
console.log(unshiftEmpty);
