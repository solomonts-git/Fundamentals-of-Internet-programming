/*
The padStart() method pads a string with another string:
The padStart() method is a string method.
To pad a number, convert the number to a string first.
*/

let text = "5555";
let padded = text.padStart(4, "x");
console.log("padded start 1", padded);

let text1 = "5";
let padded1 = text1.padStart(4, "0");
console.log("padded1 start", padded1);

let numb = 5;
let text2 = numb.toString();
let padded2 = text2.padStart(4, "0");
console.log("padded2 start", padded2);

//The padEnd() method pads a string with another string:
let text3 = "5";
let padded3 = text3.padEnd(4, "x");
console.log("padded3 end", padded3);
