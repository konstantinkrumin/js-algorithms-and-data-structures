class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const newNode = new Node(val);

		if (!this.root) {
			this.root = newNode;

			return this;
		}

		let current = this.root;

		while (true) {
			if (val === current.value) return undefined;

			if (val < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}

				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}

				current = current.right;
			}
		}
	}

	contains(val) {
		if (!this.root) {
			return false;
		}

		if (val === this.root.value) {
			return true;
		}

		let current = this.root;

		while (true) {
			if (current.value === val) {
				return true;
			}

			if (val < current.value) {
				if (current.left === null) {
					return false;
				}

				current = current.left;
			}

			if (val > current.value) {
				if (current.right === null) {
					return false;
				}

				current = current.right;
			}
		}
	}

	breadthFirstSearch() {
		let queue = [];
		let visited = [];
		let current = this.root;

		queue.push(current);

		while (queue.length !== 0) {
			current = queue.shift();
			visited.push(current.value);

			if (current.left) {
				queue.push(current.left);
			}

			if (current.right) {
				queue.push(current.right);
			}
		}

		return visited;
	}

	depthFirstSearchPreOrder() {
		let visited = [];
		const current = this.root;

		const traverse = node => {
			visited.push(node.value);

			if (node.left) {
				traverse(node.left);
			}

			if (node.right) {
				traverse(node.right);
			}
		};

		traverse(current);

		return visited;
	}

	depthFirstSearchPostOrder() {
		let visited = [];
		const current = this.root;

		const traverse = node => {
			if (node.left) {
				traverse(node.left);
			}

			if (node.right) {
				traverse(node.right);
			}

			visited.push(node.value);
		};

		traverse(current);

		return visited;
	}

	depthFirstSearchInOrder() {
		let visited = [];
		const current = this.root;

		const traverse = node => {
			if (node.left) {
				traverse(node.left);
			}

			visited.push(node.value);

			if (node.right) {
				traverse(node.right);
			}
		};

		traverse(current);

		return visited;
	}
}

let tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(6)
// tree.insert(15)
// tree.insert(3)
// tree.insert(8)
// tree.insert(20)

// tree.find(3)
// tree.find(15)
// tree.find(12)
// tree.find(10)

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
