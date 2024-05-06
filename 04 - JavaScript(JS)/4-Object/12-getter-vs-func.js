const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("fullname using function", person.fullName());

const person1 = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log("fullname using getter", person1.fullName);

/* 
What is the differences between these two examples?
Example 1 access fullName as a function: person.fullName().

Example 2 access fullName as a property: person.fullName.

The second example provides a simpler syntax.
Data Quality
JavaScript can secure better data quality when using getters and setters.

Using the lang property, in this example, returns the value of the language property in upper case:
*/

// Create an object:
const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};

// Set an object property using a setter:
person2.lang = "am";

console.log("data quality", person.lang);

/*

Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
*/
