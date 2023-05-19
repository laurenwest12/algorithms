class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
}

let graph = new Graph();
graph.addVertex('Tokyo');

console.log(graph);
