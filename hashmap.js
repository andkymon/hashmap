import { LinkedList } from "./linked-list.js";

export class HashMap {
  constructor(capacity, loadFactor) {
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

    // Stop when searchPointer points to tail node
    while (searchPointer.nextNode !== null) {
      // Stop when head node matches thee key
      if (key === searchPointer.value[0]) {
        this.array[index].headNode = searchPointer.nextNode;
        this.entryCount--;
        return true;
      }
      // Stop when searchPointer reaches node before target node
      if (key === searchPointer.nextNode.value[0]) {
        searchPointer.nextNode = searchPointer.nextNode.nextNode;
        this.entryCount--;
        return true;
      }
      searchPointer = searchPointer.nextNode;
    }

    return false;
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
}
