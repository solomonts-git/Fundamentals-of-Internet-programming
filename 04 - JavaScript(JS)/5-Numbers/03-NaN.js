// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let x = 100 / "Apple";
console.log("X ", x);

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:

console.log(isNaN(x));

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
x = NaN;
let y = 5;
let z = x + y;
console.log("z", z);

// Or the result might be a concatenation like NaN5:

// Example
x = NaN;
y = "5";
z = x + y;
console.log("NaN conca", z);

// NaN is a number: typeof NaN returns number:
console.log(typeof NaN);
