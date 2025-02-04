import { HashMap } from "./hashmap.js";

const test = new HashMap(16, 1);

// hash()
console.log(test.hash("Eleven")); // 1
console.log(test.hash("Elven")); // 8
console.log(test.hash("ELVEN")); // 8

// set()
test.set("Elven", 24);
test.set("ELVEN", 25);
console.log(test.array[8]); // Must show a linked list where the "Elven" node points to the "ELVEN" node

// get()
console.log(test.get("Elven")); // 24
console.log(test.get("Fail")); // null

// has()
console.log(test.has("Elven")); // true
console.log(test.has("Fail")); // false

// removee()
console.log(test.remove("Elven")); // true
console.log(test.remove("Fail")); // false
console.log(test.array[8]); // Must show a linked list where the only node is "ELVEN"

// length()
test.set("Kyle", 25);
console.log(test.length()); // 2