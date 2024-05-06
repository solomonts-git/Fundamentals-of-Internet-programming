/* 
The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
*/

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

/* 
By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:


*/

let newText1 = text.replace("MICROSOFT", "W3Schools");

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
newText1 = text.replace(/MICROSOFT/i, "W3Schools");

//To replace all matches, use a regular expression with a /g flag (global match):
newText1 = text.replace(/Microsoft/g, "W3Schools");
console.log(newText1);
