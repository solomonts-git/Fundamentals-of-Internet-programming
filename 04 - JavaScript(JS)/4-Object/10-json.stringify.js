// Any JavaScript object can be converted to an array using Object.values():

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

let myString = JSON.stringify(person);
console.log("object to string", myString);
