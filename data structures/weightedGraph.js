class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ val: vertex2, weight });
    this.adjacencyList[vertex2].push({ val: vertex1, weight });
  }

  dijksta(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let first;

    // build initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      first = nodes.dequeue().val;
      if (first === finish) {
        while (previous[first]) {
          path.push(first);
          first = previous[first];
        }
        break;
      }

      if (first || distances[first] !== Infinity) {
        for (let neighbor in this.adjacencyList[first]) {
          // find neighborhind node
          let nextNode = this.adjacencyList[first][neighbor];
          // calculate new distance to neighboring node
          let distance = distances[first] + nextNode.weight;
          if (distance < distances[nextNode.val]) {
            // updating new smallest distance to the neighbor
            distances[nextNode.val] = distance;
            // updating previous - how we got to the neighbor
            previous[nextNode.val] = first;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNode.val, distance);
          }
        }
      }
    }
    return path.concat(first).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.dijksta('A', 'E');
