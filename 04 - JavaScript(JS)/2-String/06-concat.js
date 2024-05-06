//concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

//The concat() method can be used instead of the plus operator. These two lines do the same:
let text = "Hello" + " " + "World!";
let textop1 = "Hello".concat(" ", "World!");

/*

All string methods return a new string. They don't modify the original string.
Formally said:
Strings are immutable: Strings cannot be changed, only replaced.
*/
