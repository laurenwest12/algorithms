class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      newTail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(num) {
    if (num < 0 || num >= this.length) return null;
    let mid = this.length / 2;

    let count;
    let current;
    if (num <= mid) {
      count = 0;
      current = this.head;
      while (count < num) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== num) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(val, i) {
    let node = this.get(i);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(val, i) {
    if (i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = list.get(i - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;

    nextNode.prev = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(i) {
    if (i >= this.length || i < 0) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    let removedNode = this.get(i);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push('Hello');
list.push('there!');
list.push('Lauren');
list.push('and');
list.push('Edna');
// list.pop();
// list.pop();
// list.pop();
// console.log(list);

// list.shift();
// list.shift();
// list.shift();
// console.log(list);

// list.unshift('Lauren');
// list.unshift('there');
// list.unshift('Hello');
// console.log(list);

// const num = list.get(4);
// console.log(num);

// list.insert('Welcome', 1);
// const tst = list.get(1);
// console.log(tst);

// const rmv = list.remove(1);
// console.log(rmv);
// console.log(list);
