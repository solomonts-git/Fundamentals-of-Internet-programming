/*

 "I will finish later!"
 Functions running in parallel with other functions are called asynchronous
 A good example is JavaScript setTimeout()

*/

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("I love You !!");
}

setInterval(myFunction1, 1000);

function myFunction1() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
