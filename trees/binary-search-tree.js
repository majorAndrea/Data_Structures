// COMPLETED

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(val) {
    if (!this.root) return null;
    if (this.root.val === val) return this.root;

    let currentNode = this.root;

    while (true) {
      if (!currentNode) break;

      if (currentNode.val < val) {
        if (currentNode.right?.val === val) return currentNode.right;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left?.val === val) return currentNode.left;
        currentNode = currentNode.left;
      }
    }

    return null;
  }

  recursiveFind(val, currentNode = this.root) {
    if (!currentNode) return null;
    if (currentNode.val === val) return this.root;

    if (currentNode.val < val) {
      if (currentNode.right?.val === val) return currentNode.right;
      return this.recursiveFind(val, currentNode.right);
    } else {
      if (currentNode.left?.val === val) return currentNode.left;
      return this.recursiveFind(val, currentNode.left);
    }
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (currentNode.val === newNode.val) {
        return console.warn(`=> Found duplicate value (${val})
                -- Dropped it.
        `);
      }

      if (currentNode.val < newNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  recursiveInsert(val, currentNode = this.root) {
    if (!this.root) {
      const newNode = new Node(val);

      this.root = newNode;
      return this;
    }

    if (currentNode.val === val) {
      return console.warn(`=> Found duplicate value (${val})
      -- Dropped it.
      `);
    }

    if (currentNode.val < val) {
      if (!currentNode.right) {
        const newNode = new Node(val);

        currentNode.right = newNode;
        return this;
      } else {
        currentNode = currentNode.right;
        return this.recursiveInsert(val, currentNode);
      }
    } else {
      if (!currentNode.left) {
        const newNode = new Node(val);

        currentNode.left = newNode;
        return this;
      } else {
        currentNode = currentNode.left;
        return this.recursiveInsert(val, currentNode);
      }
    }
  }
}
