// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  },
};

//get This example uses a lang property to get the value of the language property.
console.log("get language", person.lang);

// Set an object property using a setter:
person.lang = "amharic";

console.log("get language", person.lang);
