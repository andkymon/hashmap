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
            hashCode = Math.floor((primeNumber * hashCode + key.charCodeAt(i)) % this.capacity);
        }

        return hashCode;
    }
}


