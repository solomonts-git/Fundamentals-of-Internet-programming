// JSON.stringify converts dates into strings:
var person = {
  name: "John",
  today: new Date(),
};

console.log("date to string", JSON.stringify(person));
