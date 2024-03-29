class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;

			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	pop() {
		if (!this.head) {
			return undefined;
		}

		const poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}

		this.length--;

		return poppedNode;
	}

	shift() {
		if (this.length === 0) {
			return undefined;
		}

		const oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;

		return oldHead;
	}

	unshift(val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;

		return this;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) {
			return null;
		}

		let counter, currNode;

		if (idx <= this.length / 2) {
			counter = 0;
			currNode = this.head;

			while (counter !== idx) {
				currNode = currNode.next;
				counter++;
			}
		} else {
			counter = this.length - 1;
			currNode = this.tail;

			while (counter !== idx) {
				currNode = currNode.prev;
				counter--;
			}
		}

		return currNode;
	}

	set(idx, val) {
		let foundNode = this.get(idx);

		if (foundNode) {
			foundNode.val = val;

			return true;
		}

		return false;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) {
			return false;
		}

		if (idx === 0) {
			this.unshift(val);
			return true;
		}

		if (idx === this.length) {
			this.push(val);
			return true;
		}

		let newNode = new Node(val);
		let beforeNode = this.get(idx - 1);
		let afterNode = beforeNode.next;

		beforeNode.next = newNode;

		newNode.prev = beforeNode;
		newNode.next = afterNode;

		afterNode.prev = newNode;

		this.length++;

		return true;
	}

	remove(idx) {
		if (idx < 0 || idx >= this.length) return undefined;

		if (idx === 0) {
			return this.shift();
		}

		if (idx === this.length - 1) {
			return this.pop();
		}

		let removedNode = this.get(idx);
		let beforeNode = removedNode.prev;
		let afterNode = removedNode.next;

		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;

		removedNode.next = null;
		removedNode.prev = null;

		this.length--;

		return removedNode;
	}

	reverse() {
		let node = this.head;

		this.head = this.tail;
		this.tail = node;

		let prev = null;
		let next = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			node.prev = next;
			prev = node;
			node = next;
		}

		return this;
	}
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
