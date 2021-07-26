class MaxBinaryHeap {
	constructor(values) {
		this.values = values;
	}

	swapUp() {
		let childIndex = this.values.length -1;
		const child = this.values[childIndex];
		
		while (childIndex > 0) {
			// Calculate the index of the parent. (n-1)/2
			const parentIndex = Math.floor((childIndex - 1) / 2);
			let parent = this.values[parentIndex];
			
			// If the child is less than the parent, then stop the loop
			// because the child is in the right position inside the tree.
			if (child <= parent) break;

			// Swap the parent with the child.
			this.values[parentIndex] = child;
			this.values[childIndex] = parent;

			// Start the loop again with the old parent index.
			childIndex = parentIndex;
		}
	}

	insert(value) {
		this.values.push(value);
		this.swapUp();
	}
}

const maxBinaryHeap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);

maxBinaryHeap.insert(55);
console.log(maxBinaryHeap);