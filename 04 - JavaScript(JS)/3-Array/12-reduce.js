// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduce() method works from left-to-right in the array. See also reduceRight().

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log("sum", sum);

//The reduce() method can accept an initial value
const numbers1 = [45, 4, 9, 16, 25];
let sum1 = numbers.reduce(myFunction1, 100);

function myFunction1(total, value) {
  return total + value;
}

console.log("sum with initial", sum1);
