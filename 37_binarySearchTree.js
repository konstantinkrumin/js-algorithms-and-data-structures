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
		} else {
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
	}
}

let tree = new BinarySearchTree();
// tree.insert(10)

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
