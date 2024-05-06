//With the apply() method, you can write a method that can be used on different objects.
//The apply() method is similar to the call() method

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "Mary Doe":
console.log("Apply Method", person.fullName.apply(person1));
