// COMPLETED

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
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
			
			// If the priority of child is less than the parent priority, then stop
			// the loop because the child is in the right position inside the tree.
			if (child.priority <= parent.priority) break;

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
			let parent = this.values[parentIndex].priority;
			let leftChild = null;
			let rightChild = null;
			let hasSwapped = false;

			// Check for index out of the bounds.
			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex].priority;
			}

			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex].priority;
			}

			// If both children priority is greater than the parent priority
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

			// Swap the children with the highest priority.
			if (leftChild > parent) {
				this.swap(this.values, parentIndex, leftChildIndex);

				parentIndex = leftChildIndex;
				hasSwapped = true;
				console.log("a")
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

	dequeue() {
		const maxValue = this.values[0];
		const minValue = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = minValue;
			this.sinkDown();
		}

		return maxValue;
	}

	enqueue(val, priority) {
		const newNode = new Node(val, priority);

		this.values.push(newNode);
		this.bubbleUp();
	}
}
