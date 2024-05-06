// The JavaScript for in statement loops through the properties of an Object
// The JavaScript for in statement can also loop over the properties of an Array:

const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
  console.log(person[x]);
}

const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
  console.log(numbers[x]);
}

/* 

Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

*/
