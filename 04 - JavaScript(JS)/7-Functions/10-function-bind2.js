// Sometimes the bind() method has to be used to prevent loosing this.
// In the following example, the person object has a display method. In the display method, this refers to the person object:

const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("This will work", person.display());

//   When a function is used as a callback, this is lost.
// This example will try to display the person name after 3 seconds, but it will display undefined instead:

let result = setTimeout(person.display, 3000);
console.log("This will not work", result);

/*
    The bind() method solves this problem.
    In the following example, the bind() method is used to bind person.display to person.
    This example will display the person name after 3 seconds:
*/

let display = person.display.bind(person);
let resultwithbind = setTimeout(display, 3000);
console.log("This will work with bind in callback", resultwithbind);
