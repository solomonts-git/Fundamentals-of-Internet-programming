/*  
A self-invoking expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ().
You cannot self-invoke a function declaration.
You have to add parentheses around the function to indicate that it is a function expression:
The function Below is actually an anonymous self-invoking function (function without name).
*/

(function () {
  let x = "Hello!!!, Self Invoked!";
  console.log(x);
})();
