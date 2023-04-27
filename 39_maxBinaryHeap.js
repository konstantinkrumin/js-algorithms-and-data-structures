class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(value) {
		this.values.push(value);
		this.bubbleUp();

		return this.values;
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			const parent = this.values[parentIdx];

			if (element <= parent) {
				break;
			}

			this.values[parentIdx] = element;
			this.values[idx] = parent;

			idx = parentIdx;
		}
	}
}

const maxBinaryHeap = new MaxBinaryHeap();

// maxBinaryHeap.insert(41);
// maxBinaryHeap.insert(39);
// maxBinaryHeap.insert(33);
// maxBinaryHeap.insert(18);
// maxBinaryHeap.insert(27);
// maxBinaryHeap.insert(12);

// maxBinaryHeap.insert(55);
