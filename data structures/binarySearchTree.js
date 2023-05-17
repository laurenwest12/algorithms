class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let search = true;
      let current = this.root;
      while (search) {
        if (val < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            search = false;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            search = false;
          }
        }
      }
    }
    return this;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(20);
console.log(tree.root.left);
