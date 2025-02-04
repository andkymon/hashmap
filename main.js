import { HashMap } from "./hashmap.js";

const test = new HashMap(16, 1);


// hash()
console.log(test.hash("Eleven"));
console.log(test.hash("Elven"));
console.log(test.hash("ELVEN"));

// set()
test.set("Elven", 24);
test.set("ELVEN", 25);
console.log(test.array[8]);

// get()
console.log(test.get("Elven"));
console.log(test.get("Fail"));