/*
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.
*/

//Using the prototype Property
//The JavaScript prototype property allows you to add new properties to object constructors:
//The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
const person = new Person("Solomon", "Tsegaye", 30, "Brown");
console.log("Full name --> ", person.name());
