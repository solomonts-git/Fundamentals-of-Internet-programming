/*
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.
*/

// Create a Set
const letters = new Set(["a", "b", "c"]);

// Add Values to the Set
letters.add("d");
letters.add("e");
letters.add("f");

console.log(letters);

// The forEach() method invokes a function for each Set element:
letters.forEach(function (value) {
  console.log(value);
});

// The values() method returns an Iterator object containing all the values in a Set:

for (const x of letters.values()) {
  console.log(x);
}

// A Set has no keys.
// keys() returns the same as values().
// This makes Sets compatible with Maps.

for (const x of letters.keys()) {
  console.log(x);
}

// A Set has no keys.
// entries() returns [value,value] pairs instead of [key,value] pairs.
// This makes Sets compatible with Maps:

// Create an Iterator
const myIterator = letters.entries();

// List all Entries
for (const entry of myIterator) {
  console.log("===== entries =====");
  console.log(entry);
}
