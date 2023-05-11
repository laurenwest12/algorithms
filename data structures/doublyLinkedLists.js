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
    let mid = Math.floor(this.length / 2);
    if (num < mid) {
      console.log('beg');
      let current = this.head;
      for (let i = 0; i < num; ++i) {
        current = current.next;
      }
      return current;
    } else {
      console.log('end');
      let current = this.tail;

      for (let i = this.length - 1; i > num; --i) {
        current = current.prev;
      }
      return current;
    }
  }

  set(val, i) {
    let node = this.get(i);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
}

let list = new DoublyLinkedList();
list.push('Hello');
list.push('there');
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

const res = list.set('Miss Kitty', 5);
console.log(res);
