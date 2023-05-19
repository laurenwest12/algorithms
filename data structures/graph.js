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

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(removedVertex) {
    const edges = this.adjacencyList[removedVertex];

    for (let i = 0; i < edges.length; ++i) {
      this.removeEdge(removedVertex, edges[i]);
    }

    delete this.adjacencyList[removedVertex];
  }
}

let graph = new Graph();
graph.addVertex('NYC');
graph.addVertex('Dallas');
graph.addVertex('Atlanta');
graph.addVertex('Cleveland');
graph.addVertex('Chicago');

graph.addEdge('NYC', 'Atlanta');
graph.addEdge('NYC', 'Cleveland');
graph.addEdge('Chicago', 'Dallas');
graph.addEdge('Chicago', 'Atlanta');

// graph.removeEdge('NYC', 'Atlanta');
// console.log(graph);

graph.removeVertex('NYC');
console.log(graph);
