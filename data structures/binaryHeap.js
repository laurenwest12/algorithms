class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);

    let currenetIndex = this.values.length - 1;
    let parentIndex = Math.floor((currenetIndex - 1) / 2);

    let parent = this.values[parentIndex];

    while (val > parent) {
      this.values[parentIndex] = val;
      this.values[currenetIndex] = parent;
      currenetIndex = parentIndex;
      parentIndex = Math.floor((currenetIndex - 1) / 2);

      parent = this.values[parentIndex];
    }
    return this;
  }

  getMaxChild(idx) {
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;

    let leftChild = this.values[leftChildIdx];
    let rightChild = this.values[rightChildIdx];

    let maxChildIdx = leftChild > rightChild ? leftChildIdx : rightChildIdx;
    let maxChild = leftChild > rightChild ? leftChild : rightChild;

    if (!rightChild) {
      maxChildIdx = leftChildIdx;
      maxChild = leftChild;
    }

    return {
      maxChildIdx,
      maxChild,
    };
  }

  extractMax() {
    if (!this.values.length) return null;
    let lastAdded = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = this.values[0];
    this.values[0] = lastAdded;
    let popped = this.values.pop();

    let currentIdx = 0;
    let { maxChildIdx, maxChild } = this.getMaxChild(currentIdx);

    while (lastAdded < maxChild) {
      this.values[currentIdx] = maxChild;
      this.values[maxChildIdx] = lastAdded;

      currentIdx = maxChildIdx;

      ({ maxChildIdx, maxChild } = this.getMaxChild(currentIdx));
    }

    return popped;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
//55, 39, 41, 18, 27, 12, 33
heap.extractMax();
//41, 39, 33, 18, 27, 12
heap.extractMax();
// 39, 27, 33, 18, 12
heap.extractMax();
// 33, 27, 12, 18);
heap.extractMax();
// 27, 18, 12
heap.extractMax();
// 18, 12
heap.extractMax();
// 12
heap.extractMax();
