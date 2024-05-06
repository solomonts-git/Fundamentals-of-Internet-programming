/* 
If a function is called with missing arguments (less than declared), the missing values are set to undefined.
Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

*/

function myFunction(x, y) {
  //   if (y === undefined) {
  //     y = 2;
  //   }
  return x * y;
}

console.log("Default para", myFunction(4));
