// COMPLETED
// Maybe still room for improvements but I think this is fair enough.

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    this.length++;

    if (this.head === null) {
      this.head = node;
      node.next = null;
    }

    if (this.tail === null) {
      this.tail = node;
      node.next = null;
      return;
    }

    this.tail.next = node;
    this.tail = node;

    return this.tail;
  }

  shift() {
    if (!this.head) return null;

    if (this.head && this.head.next === null) {
      const tempHead = this.head;

      this.head = null;
      this.tail = null;
      this.length = 0;

      return tempHead;
    }

    const tempHead = this.head;

    this.head = this.head.next;
    this.length--;

    return tempHead;
  }

  unshift(val) {
    const newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;

    if (!this.tail) {
      this.tail = newHead;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    if (this.head && this.head.next === null) {
      const tempHead = this.head;

      this.head = null;
      this.tail = null;
      this.length = 0;

      return tempHead;
    }

    let currentHead = this.head;
    let newTail = currentHead;

    while (currentHead.next) {
      newTail = currentHead;
      currentHead = currentHead.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return currentHead;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      this.unshift(val);
      return true;
    }

    if (idx === this.length - 1) {
      this.push(val);
      return true;
    }

    const nodeFound = this.get(idx);

    if (nodeFound) {
      const newNode = new Node(val);
      const nodeBefore = this.get(idx - 1);

      nodeBefore.next = newNode;
      newNode.next = nodeFound;
      this.length++;

      return true;
    }

    return false;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    const nodeFound = this.get(idx);

    if (nodeFound) {
      const nodeBefore = this.get(idx - 1);
      const nodeAfter = this.get(idx + 1);

      nodeBefore.next = nodeAfter;
      this.length--;

      return nodeFound;
    }

    return false;
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1) return null;

    if (idx === 0) {
      return this.head;
    }

    if (idx === this.length - 1) {
      return this.tail;
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter < this.length) {
      if (counter === idx) {
        return currentNode;
      }

      currentNode = currentNode.next;
      counter++;
    }
    return null;
  }

  set(idx, val) {
    const nodeFound = this.get(idx);

    if (nodeFound) {
      nodeFound.val = val;
      return true;
    }

    return false;
  }

  traverse(current = this.head) {
    if (!current) return;

    console.log(current.val);
    this.traverse(current.next);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
