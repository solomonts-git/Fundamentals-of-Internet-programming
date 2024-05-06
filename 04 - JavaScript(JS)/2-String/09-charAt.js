/* 
There are 3 methods for extracting string characters:
charAt(position)
charCodeAt(position)
Property access [ ]

1. The charAt() method returns the character at a specified index (position) in a string:
*/

let text = "HELLO WORLD";
let char = text.charAt(0);
console.log("char at 0", char);

// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).

let text1 = "HELLO WORLD";
let char1 = text.charCodeAt(0);
console.log("Char code at 0", char1);

/*
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
*/

let text2 = "HELLO WORLD";
let char2 = text[0];
