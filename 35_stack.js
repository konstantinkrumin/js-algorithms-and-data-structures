class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const prevFirst = this.first;
			this.first = newNode;
			this.first.next = prevFirst;
		}

		this.size++;

		return this;
	}

	pop() {
		if (this.size === 0) return null;

		const removedNode = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = removedNode.next;
		}

		this.size--;

		return removedNode;
	}
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
