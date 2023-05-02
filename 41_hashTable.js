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
		const index = this._hash(key);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		} else {
			this.keyMap[index].push([key, value]);
		}

		return index;
	}

	get(key) {
		const hashedKey = this._hash(key);

		return this.keyMap[hashedKey].filter(mapKey => mapKey === key);
	}
}

const hashTable = new HashTable();

// hashTable.set('pink', '#FF80ED');
// hashTable.set('yellow', '#FFD700');
// hashTable.set('turquoise', '#00FFFF');
// hashTable.set('blue', '#0000FF');
// hashTable.set('gray', '#696969');

// hashTable.get('blue');
// hashTable.set('turquoise');
// hashTable.get('yellow');
// hashTable.get('red');
// hashTable.get('orange');
