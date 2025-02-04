import { HashMap } from "./hashmap.js";

const test = new HashMap(16, 1);
console.log(test.hash("Eleven"));
console.log(test.hash("Elven"));