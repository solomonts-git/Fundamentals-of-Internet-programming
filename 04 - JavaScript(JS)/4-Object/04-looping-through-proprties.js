//The JavaScript for...in statement loops through the properties of an object.

const person = {
  fname: " John",
  lname: " Doe",
  age: 25,
};

for (let x in person) {
  console.log(`${x}`, person[x]);
}
