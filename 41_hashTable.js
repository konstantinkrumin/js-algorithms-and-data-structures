class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const char = key[i];
			const value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}

		return total;
	}

	set(key, value) {
		let index = this._hash(key);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}

		this.keyMap[index].push([key, value]);
	}

	get(key) {
		const index = this._hash(key);

		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}

		return undefined;
	}

	keys() {
		let keysArr = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			const currCell = this.keyMap[i];

			if (currCell) {
				for (let j = 0; j < currCell.length; j++) {
					const currKey = currCell[j][0];

					if (!keysArr.includes(currKey)) {
						keysArr.push(currKey);
					}
				}
			}
		}

		return keysArr;
	}

	values() {
		let valuesArr = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			const currCell = this.keyMap[i];

			if (currCell) {
				for (let j = 0; j < currCell.length; j++) {
					const currKey = currCell[j][1];

					if (!valuesArr.includes(currKey)) {
						valuesArr.push(currKey);
					}
				}
			}
		}

		return valuesArr;
	}
}

const hashTable = new HashTable(17);

// hashTable.set('pink', '#FF80ED');
// hashTable.set('yellow', '#FFD700');
// hashTable.set('turquoise', '#00FFFF');
// hashTable.set('blue', '#0000FF');
// hashTable.set('gray', '#696969');

// hashTable.get('blue');
// hashTable.get('turquoise');
// hashTable.get('yellow');
// hashTable.get('red');
// hashTable.get('orange');
