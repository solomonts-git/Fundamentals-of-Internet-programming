//The trim() method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log("text2", text2);

/* 
ECMAScript 2019 added the String method trimStart() to JavaScript.
The trimStart() method works like trim(), but removes whitespace only from the start of a string.

*/

let text3 = "     Hello World!     ";
let textts = text1.trimStart();

console.log("Trimmed start", textts, "hello");

/*

ECMAScript 2019 added the String method trimEnd() to JavaScript.

The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
*/
let text4 = "     Hello World!     ";
let textend = text1.trimEnd();
console.log("Trim end", textend, "Hello");
