import { LinkedList } from "./linked-list.js";

export class HashMap {
  constructor(capacity, loadFactor) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.array = new Array(this.capacity);
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

  set(key, value) {
    const index = this.hash(key);

    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

    const nodeValue = [key, value];

    if (typeof this.array[index] === "undefined") {
      this.array[index] = new LinkedList();
      this.array[index].prepend(nodeValue);
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
  }

  get(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

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

    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

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
}
