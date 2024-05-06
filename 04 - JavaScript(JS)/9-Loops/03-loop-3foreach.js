// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value);
}
