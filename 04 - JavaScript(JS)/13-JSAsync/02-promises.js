/* 
 "I Promise a Result!"
 "Producing code" is code that can take some time
 "Consuming code" is code that must wait for the result
 A Promise is a JavaScript object that links producing code and consuming code

*/

function myDisplayer(some) {
  console.log("Promise example with result", some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 1;

  // The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
console.log("mypromise", myPromise);
myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
