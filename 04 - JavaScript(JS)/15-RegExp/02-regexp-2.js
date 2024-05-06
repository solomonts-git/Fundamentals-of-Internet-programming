/*
    Using the RegExp Object
    In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.

    Using test()
    The test() method is a RegExp expression method.
    It searches a string for a pattern, and returns true or false, depending on the result.
    The following example searches a string for the character "e":
*/

const pattern = /e/;
let res = pattern.test("The best things in life are free!");
console.log(res);

// You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:
let etest = /e/.test("The best things in life are free!");
console.log(etest);
