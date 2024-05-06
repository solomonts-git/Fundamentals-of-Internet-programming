//JSON.stringify will not stringify functions:
//This can be "fixed" if you convert the functions into strings before stringifying.
const person = {
  name: "John",
  age: function () {
    return 30;
  },
};
person.age = person.age.toString();

let myString = JSON.stringify(person);
console.log("Function to string", myString);
