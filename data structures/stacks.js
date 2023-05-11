const stack = [];

//Method one
stack.push('lewis');
stack.push('pierre');
stack.push('abigail');
stack.push('clint');

stack.pop();

//Method two
stack.unshift('community center');
stack.unshift('general store');
stack.unshift('joja');
stack.shift();
stack.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
