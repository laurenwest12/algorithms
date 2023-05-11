class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;
    return this.size;
  }

  dequeue() {
    let first = this.first;
    if (this.size === 0) return undefined;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return first.value;
  }
}

let q = new Queue();
q.enqueue('McDouble');
q.enqueue('McChicken');
q.enqueue('McFlurry');
console.log(q);
q.dequeue();
console.log(q);
