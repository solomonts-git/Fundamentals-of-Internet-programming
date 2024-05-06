const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
};

person.nationality = "English";

console.log("Person with nationality", person);

// delete nationality
delete person.nationality;
console.log("person without nationality", person);
