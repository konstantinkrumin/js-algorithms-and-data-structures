class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueque(val) {
		const newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		this.size++;

		return this;
	}

	dequeue() {
		if (this.size === 0) return null;

		const removedNode = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = removedNode.next;
		}

		this.size--;

		return removedNode.value;
	}
}

const queue = new Queue();

queue.enqueque(1);
queue.enqueque(2);
queue.enqueque(3);
queue.enqueque(4);
