//method1 using function declaration
function myFunction(a, b) {
  return a * b;
}

console.log("Function declaration", myFunction(4, 5));

// method2 using function expression

const x = function (a, b) {
  return a * b;
};

let z = x(4, 5);

/* 

The function above is actually an anonymous function (a function without a name).
Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
The function above ends with a semicolon because it is a part of an executable statement.
*/

console.log("Function expression", z);

// Method3 Function() Constructor

/* 
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
Functions can also be defined with a built-in JavaScript function constructor called Function(). 
*/

const myFunction1 = new Function("a", "b", "return a * b");

let x1 = myFunction1(4, 3);
