/* 
The code inside a function is not executed when the function is defined.
The code inside a function is executed when the function is invoked.
It is common to use the term "call a function" instead of "invoke a function".
It is also common to say "call upon a function", "start a function", or "execute a function".

*/

function myFunction(a, b) {
  return a * b;
}
const x = myFunction(10, 2); // Will return 20
console.log("function result", x);
