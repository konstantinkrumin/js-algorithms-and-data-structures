class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			currVal => currVal !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			currVal => currVal !== vertex1
		);
	}

	removeVertex(vertex) {
		const edges = this.adjacencyList[vertex];

		for (let i = 0; i < edges.length; i++) {
			const currEdge = edges[i];
			this.removeEdge(vertex, currEdge);
		}

		delete this.adjacencyList[vertex];
	}
}

const graph = new Graph();

// graph.addVertex('Madrid');
// graph.addVertex('Paris');
// graph.addVertex('Moscow');
// graph.addVertex('London');
// graph.addVertex('Berlin');

// graph.addEdge('Madrid', 'Paris');
// graph.addEdge('Paris', 'London');
// graph.addEdge('Berlin', 'London');
// graph.addEdge('Paris', 'Berlin');
// graph.addEdge('Madrid', 'London');

// graph.removeEdge('Paris', 'London')

// graph.removeVertex("London")
