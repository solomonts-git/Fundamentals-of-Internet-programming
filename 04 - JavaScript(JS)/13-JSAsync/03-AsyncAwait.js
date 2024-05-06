/* 
    "async and await make promises easier to write"
     async makes a function return a Promise
     await makes a function wait for a Promise

     
JavaScript Async
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise

Async Syntax
The keyword async before a function makes the function return a promise:

Example
async function myFunction() {
  return "Hello";
}
Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}
Here is how to use the Promise:

myFunction().then(
  function(value) {  code if successful },
  function(error) {  code if some error  }
  );
*/

function myDisplayer(some) {
  console.log("Result ", some);
}

async function myFunction() {
  return "Hello";
}

myFunction().then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
