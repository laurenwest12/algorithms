class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);

    let currentIdx = this.values.length - 1;
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    let parent = this.values[parentIdx];

    while (parent && parent.priority > node.priority) {
      this.values[parentIdx] = node;
      this.values[currentIdx] = parent;

      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
      parent = this.values[parentIdx];
    }
  }

  dequeue() {
    const popped = this.values[0];
    let current = this.values[this.values.length - 1];
    let currentIdx = 0;
    this.values[currentIdx] = current;
    this.values.pop();

    let { minChildIdx, minChild } = this.getMinChild(currentIdx);

    while (minChild && minChild.priority < current.priority) {
      this.values[currentIdx] = minChild;
      this.values[minChildIdx] = current;

      current = minChild;
      currentIdx = minChildIdx;

      ({ minChildIdx, minChild } = this.getMinChild(currentIdx));
    }
    return popped;
  }

  getMinChild(idx) {
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;

    let leftChild = this.values[leftChildIdx];
    let rightChild = this.values[rightChildIdx];

    let minChild = null;
    let minChildIdx = null;

    if (!leftChild) {
      return {
        minChildIdx,
        minChild,
      };
    }

    if (!rightChild) {
      minChildIdx = leftChildIdx;
      minChild = leftChild;

      return {
        minChildIdx,
        minChild,
      };
    }

    minChildIdx =
      leftChild.priority < rightChild.priority ? leftChildIdx : rightChildIdx;
    minChild =
      leftChild.priority < rightChild.priority ? leftChild : rightChild;

    return {
      minChildIdx,
      minChild,
    };
  }
}

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

let q = new PriorityQueue();

// 5
q.enqueue(1, 5);
// 2, 5
q.enqueue(1, 2);
// 1, 5, 2
q.enqueue(1, 1);
// 1, 5, 2, 10
q.enqueue(1, 10);
// 1, 3, 2, 10, 5
q.enqueue(1, 3);
// 2, 3, 5, 10
q.dequeue();
// 3, 10, 5
q.dequeue();
// 5, 10
q.dequeue();
// 10
q.dequeue();
q.dequeue();
console.log(q);
