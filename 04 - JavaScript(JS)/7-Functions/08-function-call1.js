/* 
In JavaScript all functions are object methods.
If a function is not a method of a JavaScript object, it is a function of the global object

The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.
*/

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
console.log("Person 1 ===>", person.fullName.call(person1));
console.log("Person 2 ===>", person.fullName.call(person2));
