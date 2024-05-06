/* 
By default, JavaScript displays numbers as base 10 decimals.
But you can use the toString() method to output numbers from base 2 to base 36.
Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

*/

let myNumber = 32;
console.log("Base 32", myNumber.toString(32));
console.log("Base 16", myNumber.toString(16));
console.log("Base 12", myNumber.toString(12));
console.log("Base 10", myNumber.toString(10));
console.log("Base 8", myNumber.toString(8));
console.log("Base 2", myNumber.toString(2));
