//The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 8, 16, 25];

numbers.forEach(function (element, index, array) {
  array[index] = element * 2;
});
console.log(numbers);
