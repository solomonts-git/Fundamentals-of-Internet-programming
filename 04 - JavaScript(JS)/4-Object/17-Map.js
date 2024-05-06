/* 
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.
*/

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// Set Map Values
fruits.set("mango", 400);
fruits.set("onion", 100);

// The set() method can also be used to change existing Map values:
fruits.set("apples", 800);

// The get() method gets the value of a key in a Map:
fruits.get("apples"); // Returns 800

// The size property returns the number of elements in a Map:
console.log("Map size", fruits.size);

//The delete() method removes a Map element:
fruits.delete("apples");

//The clear() method removes all the elements from a Map:
// fruits.clear();

//The has() method returns true if a key exists in a Map:
console.log("has apples", fruits.has("apples"));

fruits.forEach(function (value, key) {
  console.log(key, value);
});

//The entries() method returns an iterator object with the [key,values] in a Map:
// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
console.log(text);

// The keys() method returns an iterator object with the keys in a Map:
// List all keys
let textkey = "";
for (const x of fruits.keys()) {
  textkey += x;
}

//The values() method returns an iterator object with the values in a Map:
// List all values
let textvalue = "";
for (const x of fruits.values()) {
  textvalue += x;
}
