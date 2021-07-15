class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  #size;

  constructor() {
    this.first = null;
    this.last = null;
    this.#size = 0;
  }

  // Push and Pop are N(1) -- constant time.

  push(val) {
    const newNode = new Node(val);

    if (!this.first && !this.last) {
      this.first = newNode;
      this.last = newNode;
      this.#size++;

      return this.#size;
    }

    if (this.#size) {
      const tempNode = this.first;

      this.first = newNode;
      this.first.next = tempNode;
      this.#size++;

      return this.#size;
    }
  }

  pop() {
    if (!this.#size) return null;

    const poppedNode = this.first;

    if (this.#size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.#size--;

    return poppedNode;
  }
}
