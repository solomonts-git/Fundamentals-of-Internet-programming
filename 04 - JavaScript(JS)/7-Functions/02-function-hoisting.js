/*
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
Hoisting applies to variable declarations and to function declarations.
Because of this, JavaScript functions can be called before they are declared:
*/
let x = myFunction(5);
console.log("Hoisted X", x);
function myFunction(y) {
  return y * y;
}
