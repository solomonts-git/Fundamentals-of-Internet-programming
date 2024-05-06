//The filter() method creates a new array with array elements that passes a test.

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log("numbers", numbers);
console.log("over18", over18);
