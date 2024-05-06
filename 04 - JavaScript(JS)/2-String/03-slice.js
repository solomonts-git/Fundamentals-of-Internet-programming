/* 
Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
*/

//slice() extracts a part of a string and returns the extracted part in a new string.
//slice(start, end)
//The method takes 2 parameters: the start position, and the end position (end not included).

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log("string", str);
console.log("part", part);

//If you omit the second parameter, the method will slice out the rest of the string
let part1 = str.slice(7);
console.log("part1", part1);

//If a parameter is negative, the position is counted from the end of the string.

//This example slices out a portion of a string from position -12 to position -6:

let part2 = str.slice(-12, -6);
console.log("part2", part2);

/* 

substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().
If you omit the second parameter, substring() will slice out the rest of the string.
*/

let str1 = "Apple, Banana, Kiwi";
let part3 = str1.substring(7, 13);

/* 
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.
If you omit the second parameter, substr() will slice out the rest of the string.
*/
let part4 = str.substr(7, 6);
