// COMPLETED

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	bubbleUp() {
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

	swap(array, rightIndex, leftIndex) {
		
		const temp = array[rightIndex];

		array[rightIndex] = array[leftIndex];
		array[leftIndex] = temp;

		return true;
	}

	sinkDown() {
		let parentIndex = 0;
		const length = this.values.length;

		while (true) {
			let leftChildIndex = (2 * parentIndex) + 1;
			let rightChildIndex = (2 * parentIndex) + 2;
			let parent = this.values[parentIndex];
			let leftChild = null;
			let rightChild = null;
			let hasSwapped = false;

			// Check for index out of the bounds.
			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
			}

			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
			}

			// If both children are greater than the element to swap
			// then do the swap with the greater of the two children.
			if (leftChild > parent
				&& rightChild > parent) {
				if (leftChild > rightChild) {
					this.swap(this.values, parentIndex, leftChildIndex);

					hasSwapped = true;
					parentIndex = leftChildIndex;

				} else {
					this.swap(this.values, parentIndex, rightChildIndex);

					hasSwapped = true;
					parentIndex = rightChildIndex;
				}
				continue;
			}

			// Swap with the greater of the children.
			if (leftChild > parent) {
				this.swap(this.values, parentIndex, leftChildIndex);

				parentIndex = leftChildIndex;
				hasSwapped = true;
				continue;
			}

			if (rightChild > parent) {
				this.swap(this.values, parentIndex, rightChildIndex);

				parentIndex = rightChildIndex;
				hasSwapped = true;
				continue;
			}

			if (hasSwapped === false) {
				break;
			}
		}
	}

	extractMax() {
		const maxValue = this.values[0];
		const minValue = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = minValue;
			this.sinkDown();
		}

		return maxValue;
	}

	insert(value) {
		this.values.push(value);
		this.bubbleUp();
	}
}
