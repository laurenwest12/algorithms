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

  depthFirstRecursion(start) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    })(start);

    console.log(result);
    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const results = [];
    const visited = {};
    visited[start] = true;

    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    console.log(results);
    return results;
  }
}

let graph = new Graph();
// graph.addVertex('NYC');
// graph.addVertex('Dallas');
// graph.addVertex('Atlanta');
// graph.addVertex('Cleveland');
// graph.addVertex('Chicago');

// graph.addEdge('NYC', 'Atlanta');
// graph.addEdge('NYC', 'Cleveland');
// graph.addEdge('NYC', 'Chiago')
// graph.addEdge('Chicago', 'Dallas');
// graph.addEdge('Chicago', 'Atlanta');

// graph.removeEdge('NYC', 'Atlanta');
// console.log(graph);

// graph.removeVertex('NYC');
// console.log(graph);

//   A
//  /  \
// B    C
// |    |
// D -- E
//  \  /
//    F

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

graph.depthFirstRecursion('A');
graph.depthFirstIterative('A');
