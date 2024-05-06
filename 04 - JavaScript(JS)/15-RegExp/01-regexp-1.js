// A regular expression is a sequence of characters that forms a search pattern.
// The search pattern can be used for text search and text replace operations.
// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.

/*
Syntax
/pattern/modifiers;

Example
/w3schools/i;

Example explained:
/w3schools/i  is a regular expression.
w3schools  is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).
*/

// Use a regular expression to do a case-insensitive search for "w3schools" in a string:

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n);
// Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:

let text1 = "Visit Microsoft!";
let result = text1.replace(/microsoft/i, "W3Schools");
console.log(result);
