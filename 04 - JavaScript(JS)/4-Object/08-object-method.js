// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  },
};

console.log("Full Name---", person.fullName());
