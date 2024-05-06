// A string can be converted to an array with the split() method:
// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

let text = "Hello";
let text1 = "a,b,c,d,e,f";

const myArr = text.split("");
const myArr1 = text1.split(",");
console.log("My array 1", myArr);
console.log("My array 2", myArr1);
