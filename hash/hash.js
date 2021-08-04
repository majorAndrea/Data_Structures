class HashTable {
  // Size must be a prime number because it will
  // drastically decrease the number of collisions.
  constructor(size = 53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}