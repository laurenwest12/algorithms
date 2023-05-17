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
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }

    return found;
  }

  breadthFirstSearch() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  // traverse(node) {
  //   let visited = [];

  //   visited.push(node.value);

  //   if (node.left) {
  //     visited.concat(this.traverse(node.left));
  //   }

  //   if (node.right) {
  //     visited.push(this.traverse(node.right));
  //   }

  //   return visited.flat();
  // }

  depthFirstPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  depthFirstPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  depthFirstInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

//    10
//  5    15
//2  7  14   20

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(20);
tree.insert(7);
tree.insert(14);

// const search = tree.find(900);
// console.log(search);

// const data = tree.breadthFirstSearch();
// console.log(data);

// const data = tree.depthFirstPreOrder();
// console.log(data);

// const data = tree.depthFirstPostOrder();
// console.log(data);

// const data = tree.depthFirstInOrder();
// console.log(data);
