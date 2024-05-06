/*
    "I will call back later!"
    A callback is a function passed as an argument to another function
    This technique allows a function to call another function
    A callback function can run after another function has finished
    
    Right: myCalculator(5, 5, myDisplayer);
    Wrong: myCalculator(5, 5, myDisplayer());
*/

function myDisplayer(some) {
  // document.getElementById("demo").innerHTML = some;
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
