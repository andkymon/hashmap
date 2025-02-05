import { LinkedList } from "./linked-list.js";

export class HashMap {
  constructor(capacity, loadFactor) {
    this.initialCapacity = capacity;
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.array = new Array(this.capacity);
    this.entryCount = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = Math.floor(
        (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity
      );
    }

    return hashCode;
  }

  validateIndex(index) {
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  set(key, value) {
    const index = this.hash(key);
    this.validateIndex();

    const nodeValue = [key, value];

    if (typeof this.array[index] === "undefined") {
      this.array[index] = new LinkedList();
      this.array[index].prepend(nodeValue);
      this.entryCount++;
      this.checkLoadLevelExcess();
      return;
    }

    let searchPointer = this.array[index].headNode;

    // Stop when searchPointer points to null
    while (searchPointer !== null) {
      if (key === searchPointer.value[0]) {
        searchPointer.value[1] = value;
        return;
      }
      searchPointer = searchPointer.nextNode;
    }

    this.array[index].append(nodeValue);
    this.entryCount++;
    this.checkLoadLevelExcess();
  }

  checkLoadLevelExcess() {
    if (this.entryCount / this.capacity > this.loadFactor) {
      this.capacity = this.capacity * 2;
      this.rehashEntries();
    }

    return `Capacity: ${this.capacity}, Load Levels: ${
      this.entryCount / this.capacity
    }`;
  }

  rehashEntries() {
    const oldArray = [...this.array];
    this.array = new Array(this.capacity);
    this.entryCount = 0;

    for (const bucket of oldArray) {
      if (typeof bucket === "undefined") {
        continue;
      }

      let searchPointer = bucket.headNode;

      // Stop when searchPointer points to null
      while (searchPointer !== null) {
        this.set(searchPointer.value[0], searchPointer.value[1]);
        searchPointer = searchPointer.nextNode;
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    this.validateIndex();

    if (typeof this.array[index] === "undefined") {
      return null;
    }

    let searchPointer = this.array[index].headNode;

    // Stop when searchPointer points to null
    while (searchPointer !== null) {
      if (key === searchPointer.value[0]) {
        return searchPointer.value[1];
      }
      searchPointer = searchPointer.nextNode;
    }

    return searchPointer;
  }

  has(key) {
    const index = this.hash(key);
    this.validateIndex();

    if (typeof this.array[index] === "undefined") {
      return false;
    }

    let searchPointer = this.array[index].headNode;

    // Stop when searchPointer points to null
    while (searchPointer !== null) {
      if (key === searchPointer.value[0]) {
        return true;
      }
      searchPointer = searchPointer.nextNode;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    this.validateIndex();

    if (typeof this.array[index] === "undefined") {
      return false;
    }

    let searchPointer = this.array[index].headNode;

    // Stop when searchPointer points to null
    while (searchPointer !== null) {
      // Stop when head node matches the key
      if (key === searchPointer.value[0]) {
        this.array[index].headNode = searchPointer.nextNode;
        this.entryCount--;
        this.checkLoadLevelDeficit();
        return true;
      }
      // Stop when searchPointer reaches node before target node
      if (key === searchPointer.nextNode.value[0]) {
        searchPointer.nextNode = searchPointer.nextNode.nextNode;
        this.entryCount--;
        this.checkLoadLevelDeficit();
        return true;
      }
      searchPointer = searchPointer.nextNode;
    }

    return false;
  }

  checkLoadLevelDeficit() {
    if (this.entryCount / (this.capacity / 2) <= this.loadFactor) {
      this.capacity = this.capacity / 2;
      this.rehashEntries();
    }

    return `Capacity: ${this.capacity}, Load Levels: ${
      this.entryCount / this.capacity
    }`;
  }

  length() {
    return this.entryCount;
  }

  clear() {
    this.entryCount = 0;
    this.array = new Array(this.capacity);
  }

  keys() {
    const keys = [];

    for (const bucket of this.array) {
      if (typeof bucket === "undefined") {
        continue;
      }

      let searchPointer = bucket.headNode;

      // Stop when searchPointer points to null
      while (searchPointer !== null) {
        keys.push(searchPointer.value[0]);
        searchPointer = searchPointer.nextNode;
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (const bucket of this.array) {
      if (typeof bucket === "undefined") {
        continue;
      }

      let searchPointer = bucket.headNode;

      // Stop when searchPointer points to null
      while (searchPointer !== null) {
        values.push(searchPointer.value[1]);
        searchPointer = searchPointer.nextNode;
      }
    }

    return values;
  }

  entries() {
    const entries = [];

    for (const bucket of this.array) {
      if (typeof bucket === "undefined") {
        continue;
      }

      let searchPointer = bucket.headNode;

      // Stop when searchPointer points to null
      while (searchPointer !== null) {
        entries.push(searchPointer.value);
        searchPointer = searchPointer.nextNode;
      }
    }

    return entries;
  }
}
