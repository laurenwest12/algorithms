class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

let graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('NYC');
graph.addVertex('Dallas');
graph.addVertex('Atlanta');
graph.addVertex('Cleveland');

graph.addEdge('NYC', 'Atlanta');
graph.addEdge('NYC', 'Cleveland');
console.log(graph);
