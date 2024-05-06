/*  
Adding a Property to a Constructor
You cannot add a new property to an object constructor the same way you add a new property to an existing object:

Person.nationality = "English";

*/

//To add a new property to a constructor, you must add it to the constructor function:

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}

// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
