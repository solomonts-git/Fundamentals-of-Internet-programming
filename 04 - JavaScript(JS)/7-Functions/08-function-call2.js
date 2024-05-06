//The call() method can accept arguments

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
  "Call with arguments",
  person.fullName.call(person1, "Oslo", "Norway")
);
