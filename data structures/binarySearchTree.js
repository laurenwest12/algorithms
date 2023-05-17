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
        if (val === current.value) {
          return undefined;
        }

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

  find(val) {
    if (!this.root) {
      return false;
    }

    let current = this.root;

    while (true) {
      if (current.value === val) {
        return current;
      }

      if (val < current.value) {
        if (!current.left) {
          return false;
        }
        current = current.left;
      } else {
        if (!current.right) {
          return false;
        }
        current = current.right;
      }
    }
  }
}

//    10
//  5    15
//2  7   8   20

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(20);
tree.insert(7);
tree.insert(8);

const search = tree.find(15);
console.log(search);
