// The JavaScript Math object allows you to perform mathematical tasks on numbers.
// The Math Object
// Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object first.
// Math Properties (Constants)
// The syntax for any Math property is : Math.property.
// JavaScript provides 8 mathematical constants that can be accessed as Math properties:

// Math.round(x) returns the nearest integer:
console.log("rounding 4.6", Math.round(4.6));
console.log("rounding 4.5", Math.round(4.5));
console.log("rounding 4.4", Math.round(4.4));

// Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log("Rounding up ceil 4.8", Math.ceil(4.8));
console.log("Rounding up ceil 4.7", Math.ceil(4.7));
console.log("Rounding up ceil 4.3", Math.ceil(4.4));
console.log("Rounding up ceil 4.2", Math.ceil(4.2));
console.log("Rounding up ceil -4.2", Math.ceil(-4.2));

// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log("Rounding down floor 4.8", Math.floor(4.8));
console.log("Rounding down floor 4.7", Math.floor(4.7));
console.log("Rounding down floor 4.4", Math.floor(4.4));
console.log("Rounding down floor 4.2", Math.floor(4.2));
console.log("Rounding down floor -4.2", Math.floor(-4.2));

// Math.trunc(x) returns the integer part of x:
console.log("Trunc the number 3.8", Math.trunc(3.8));
console.log("Trunc the number -3.8", Math.trunc(-3.8));

// Math.sign(x) returns if x is negative, null or positive:
console.log("Get sign of 4", Math.sign(4));
console.log("Get sign of 0", Math.sign(0));
console.log("Get sign of -4", Math.sign(-4));

// Math.pow(x, y) returns the value of x to the power of y:
console.log("8 power of 2", Math.pow(8, 2));

// Math.sqrt(x) returns the square root of x:
console.log("square root of 64", Math.sqrt(64));

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:

console.log("absolute value of -4.7", Math.abs(4.7));

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log("Minimum valaue", Math.min(0, 150, 30, 20, -8, -200));
console.log("Maximum valaue", Math.max(0, 150, 30, 20, -8, -200));
