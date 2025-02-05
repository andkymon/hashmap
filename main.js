import { HashMap } from "./hashmap.js";

// set() and checkLoadLevels()
const test = new HashMap(16, 0.75);
console.log(test.checkLoadLevelExcess()); // Capacity: 16, Load Levels: 0

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
console.log(test.checkLoadLevelExcess()); // Capacity: 16, Load Levels: 0.75

test.set('apple', 'red'); // Should only change the value of 'apple' key
console.log(test.entries());

// Should double capacity at this point as load levels exceed load factor
test.set('moon', 'silver'); 
console.log(test.checkLoadLevelExcess()); // Capacity: 32, Load Levels: 0.40625

test.set('notebook', 'cyan');
test.set('owl', 'beige');
test.set('pencil', 'maroon');
test.set('quilt', 'magenta');
test.set('rose', 'crimson');
test.set('sunflower', 'yellow');
test.set('table', 'teal');
test.set('umbrella', 'violet');
test.set('van', 'navy');
test.set('whale', 'indigo');
test.set('xylophone', 'chartreuse'); 
console.log(test.checkLoadLevelExcess()); // Capacity: 32, Load Levels: 0.75

// Should double capacity at this point as load levels exceed load factor
test.set('yarn', 'peach'); 
console.log(test.checkLoadLevelExcess()); // Capacity: 64, Load Levels: 0.390625

// Should half capacity at this point as previous capacity can accomodate current load level
test.remove('yarn'); 
console.log(test.checkLoadLevelExcess()); // Capacity: 32, Load Levels: 0.75

// Should double capacity at this point as load levels exceed load factor
test.set('yarn', 'peach'); 
console.log(test.checkLoadLevelExcess()); // Capacity: 64, Load Levels: 0.390625

// hash()
console.log(test.hash("Eleven")); // 33
console.log(test.hash("Elven")); // 56
console.log(test.hash("ELVEN")); // 56
console.log(test.hash("LEVEN")); // 38

// get()
console.log(test.get("whale")); // indigo
console.log(test.get("fail")); // null

// has()
console.log(test.has("whale")); // true
console.log(test.has("fail")); // false

// remove()
console.log(test.remove("whale")); // true
console.log(test.remove("fail")); // false
console.log(test.entries()); // Must not include 'whale' key

console.log(test.remove("owl")); // true
console.log(test.array[4]); // Must not include 'whale' key

// length()
test.set("Kyle", 25);
console.log(test.length()); // 24

// keys()
console.log(test.keys()); // Array of all keys [key1, key2]

// values()
console.log(test.values()); // Array of all values [value1, value2]

// entries()
console.log(test.entries()); // Array of all entries [[key1, value1], [key2, value2]]

// clear()
test.clear();
console.log(test.length()); // 0
console.log(test.entries()); // []