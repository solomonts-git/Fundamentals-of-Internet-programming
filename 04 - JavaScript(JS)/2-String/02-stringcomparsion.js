//Comparing two JavaScript objects always returns false.
let x = new String("John");
let y = new String("John");
console.log("x==y", x == y);
console.log("x===y", x === y);

let x1 = "John";
let y1 = new String("John");
console.log("x1==y1", x1 == y1);
console.log("x1===y1", x1 === y1);
