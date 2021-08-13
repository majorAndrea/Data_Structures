// COMPLETED
// This is not a serious implementation, it is just
// to learn how hash tables work under the hood.

class HashTable {
  // Size must be a prime number because it will
  // drastically decrease the number of collisions.
  constructor(size = 53){
    this.keyMap = new Array(size);
  }

  #hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    const hashedKey = this.#hash(key);

    if (this.keyMap[hashedKey]) {
      this.keyMap[hashedKey].push([key, val]);
      return;
    }

    this.keyMap[hashedKey] = [[key, val]];
  }

  get(key) {
    const hashedKey = this.#hash(key);

    // If more than one entry is in the bucket, then loop
    // through and get the corresponding value for the key.
    if (this.keyMap[hashedKey]?.length > 1) {
      for (let entry of this.keyMap[hashedKey]) {
        if (entry[0] === key) {
          return entry[1];
        }
      }
    }
    // Return the corresponding value for the key if exists.
    return this.keyMap[hashedKey]?.[0][1] || undefined;
  }

  // Code duplication here, but I think is fine 
  // for very simple hash implementation.

  keys() {
    const keys = [];

    for (let entry of this.keyMap) {
      if (entry) {
        // Get all keys inside nested buckets.
        if (entry.length > 1) {
          for (let subEntries of entry) {
            if (!keys.includes(subEntries[0]))
              keys.push(subEntries[0]);
          }
        // Get key of the bucket
        } else {
          if (!keys.includes(entry[0][0]))
            keys.push(entry[0][0])
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];

    for (let entry of this.keyMap) {
      if (entry) {
        // Get all values inside nested buckets.
        if (entry.length > 1) {
          for (let subEntries of entry) {
            // Filter out duplicated values.
            if (!values.includes(subEntries[1]))
              values.push(subEntries[1]);
          }
        // Get the value of the bucket
        } else {
          // Filter out duplicated values.
          if (!values.includes(entry[0][1]))
            values.push(entry[0][1]);
        }
      }
    }
    return values;
  }
}

