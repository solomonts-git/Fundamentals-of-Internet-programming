function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  //console.log("this--->", this);
}

// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

/* 
The examples from the previous chapters are limited. They only create single objects.
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function.
In the example above, function Person() is an object constructor function.
Objects of the same type are created by calling the constructor function with the new keyword:  */
