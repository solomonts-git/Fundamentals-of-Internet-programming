const person = {
  firstName: "Solomon",
  lastName: "Tsegaye",
  age: 32,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  thistest: function () {
    return this;
  },
};

console.log("Full Name =>", person.fullName());
console.log("this ==>", person.thistest());
