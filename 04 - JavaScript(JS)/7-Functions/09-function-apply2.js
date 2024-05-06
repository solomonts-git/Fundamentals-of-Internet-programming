/* 
    The Difference Between call() and apply()
    The difference is:
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.
    The apply() method is very handy if you want to use an array instead of an argument list.

*/

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(
  "Apply with argumets => ",
  person.fullName.apply(person1, ["Oslo", "Norway"])
);

// Math.max.apply(null, [1,2,3]); // Will also return 3
// Math.max.apply(Math, [1,2,3]); // Will also return 3
