# HashMap and HashSet Implementations

## Description

This project contains custom implementations of HashMap and HashSet data structures, optimized for efficient key storage, retrieval, and management. Both classes utilize arrays with linked lists to handle collisions and dynamically adjust capacity to maintain performance.

---

## HashMap Methods

### `constructor(capacity, loadFactor)`
Initializes the hash map with a specified initial capacity and load factor.

### `hash(key)`
Generates a hash index for a given key using a simple polynomial hash function.

### `validateIndex(index)`
Validates whether the provided index is within the bounds of the current capacity.

### `set(key, value)`
Adds or updates a key-value pair in the hash map. Handles collisions using a linked list and dynamically checks load levels.

### `checkLoadLevelExcess()`
Checks if the current load level exceeds the load factor and doubles the capacity if necessary.

### `checkLoadLevelDeficit()`
Checks if the current load level is below the allowed threshold and reduces the capacity by half if necessary.

### `rehashEntries()`
Rehashes and redistributes all entries into a newly resized array.

### `get(key)`
Retrieves the value associated with a given key. Returns `null` if the key does not exist.

### `has(key)`
Checks whether a key exists in the hash map.

### `remove(key)`
Removes a key-value pair from the hash map. Returns `true` if successful or `false` if the key is not found.

### `length()`
Returns the current number of key-value entries.

### `clear()`
Clears all key-value entries and resets the capacity.

### `keys()`
Returns an array of all keys present in the hash map.

### `values()`
Returns an array of all values present in the hash map.

### `entries()`
Returns an array of all key-value entries in the hash map.

## HashSet Methods

### `constructor(capacity, loadFactor)`
Initializes the hash set with a specified initial capacity and load factor.

### `hash(key)`
Generates a hash index for a given key using a simple polynomial hash function.

### `validateIndex(index)`
Validates whether the provided index is within the bounds of the current capacity.

### `set(key)`
Adds or updates a key in the hash set. Handles collisions using a linked list and dynamically checks load levels.

### `checkLoadLevelExcess()`
Checks if the current load level exceeds the load factor and doubles the capacity if necessary.

### `checkLoadLevelDeficit()`
Checks if the current load level is below the allowed threshold and reduces the capacity by half if necessary.

### `rehashEntries()`
Rehashes and redistributes all entries into a newly resized array.

### `has(key)`
Checks whether a key exists in the hash set.

### `remove(key)`
Removes a key from the hash map. Returns `true` if successful or `false` if the key is not found.

### `length()`
Returns the current number of key entries.

### `clear()`
Clears all key entries and resets the capacity.

### `entries()`
Returns an array of all key entries in the hash map.