// UNFINISHED
// Working on spare time

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  #length;

  constructor() {
    this.head = null;
    this.tail = null;
    this.#length = 0;
  }

  traverse(current = this.head) {
    if (!current) return;

    console.log(current.val);
    this.traverse(current.next);
  }

  push(val) {
    const node = new Node(val);

    if (this.#length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.#length++;
    return this;
  }

  pop() {
    if (this.#length === 0) return undefined;

    const poppedNode = this.tail;

    if (this.#length === 1) {
      this.head = null;
      this.tail = null;
      this.#length = 0;
      return poppedNode;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    this.#length--;

    return poppedNode;
  }

  shift() {
    if (this.#length === 0) return undefined;

    const shiftedNode = this.head;

    if (this.#length === 1) {
      this.head = null;
      this.tail = null;
      this.#length = 0;
      return shiftedNode;
    }

    this.head = this.head.next;
    this.head.prev = null;
    shiftedNode.next = null;
    this.#length--;

    return shiftedNode;
  }

  unshift(val) {
    const node = new Node(val);

    if (this.#length === 0) {
      this.head = node;
      this.tail = node;
      this.#length++;
      return this;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.#length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx > this.#length - 1) return undefined;

    if (idx === 0) {
      return this.head;
    }

    if (idx === this.#length - 1) {
      return this.tail;
    }

    const middle = Math.floor(this.#length / 2);

    let currentNode = this.head;
    let direction = "next";
    let counter = 0;

    if (idx > middle) {
      direction = "prev";
      counter = this.#length - 1;
      currentNode = this.tail;
    }

    while (counter !== idx) {
      if (counter === idx) {
        return currentNode;
      }
      currentNode = currentNode[direction];
      direction === "prev" ? counter-- : counter++;
    }
    return currentNode;
  }

  set(idx, val) {
    const foundNode = this.get(idx);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.#length - 1) return undefined;

    if (idx === 0) {
      return !!this.unshift(val);
    }

    if (idx === this.#length - 1) {
      return !!this.push(val);
    }

    const node = new Node(val);
    const insertNode = this.get(idx - 1);

    if (insertNode) {
      const insertNodeNext = insertNode.next;
      insertNode.next = node;
      node.prev = insertNode;
      node.next = insertNodeNext;
      node.next.prev = node;
    }

    this.#length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.#length - 1) return undefined;

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.#length - 1) {
      return this.pop();
    }

    const removedNode = this.get(idx);

    if (removedNode) {
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
    }

    this.#length--;
    return removedNode;
  }
}
