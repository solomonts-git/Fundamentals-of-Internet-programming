//The every() method check if all array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  console.log("array ..", array);
  return value > 18;
}

console.log("all Over 18", allOver18);
