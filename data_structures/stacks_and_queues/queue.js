// COMPLETED

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  #size;

  constructor() {
    this.first = null;
    this.last = null;
    this.#size = 0;
  }

  // Enqueue and Dequeue are N(1) -- constant time.

  enqueue(val) {
    const newNode = new Node(val);

    if (this.#size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.#size;
  }

  dequeue() {
    if (this.length === 0) return null;

    const tempNode = this.first;

    if (this.first === this.last) this.last === null;

    this.first = this.first.next;
    this.#size--;

    return tempNode;
  }
}
