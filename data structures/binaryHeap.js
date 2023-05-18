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
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
console.log(heap);
