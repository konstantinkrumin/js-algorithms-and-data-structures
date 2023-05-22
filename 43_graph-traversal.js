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
		const adjacentVertices = this.adjacencyList[vertex];

		for (let i = 0; i < adjacentVertices.length; i++) {
			const adjacentVertex = edges[i];
			this.removeEdge(vertex, adjacentVertex);
		}

		delete this.adjacencyList[vertex];
	}

	depthFirstTraversalRecursive(start) {
		let result = [];
		let visited = {};

		const helper = vertex => {
			if (!vertex) return;

			visited[vertex] = true;
			result.push(vertex);

			const adjacentVertices = this.adjacencyList[vertex];

			for (let i = 0; i < adjacentVertices.length; i++) {
				const currVal = adjacentVertices[i];

				if (!visited[currVal]) {
					helper(currVal);
				}
			}
		};

		helper(start);

		return result;
	}

	depthFirstTraversalIterative(start) {
		let stack = [start];
		let result = [];
		let visited = {};

		let currentVertex;

		visited[start] = true;

		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}

		return result;
	}

	breadthFirstTraversal(start) {
		let queue = [start];
		let result = [];
		let visited = {};

		let currentVertex;
		visited[start] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}

		return result;
	}
}

const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');
