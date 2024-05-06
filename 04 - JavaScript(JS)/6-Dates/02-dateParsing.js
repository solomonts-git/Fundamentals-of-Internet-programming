// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

// Date.parse() returns the number of milliseconds between the date and January 1, 1970:

let msec = Date.parse("March 21, 2012");
const d = new Date(msec);
console.log("Parsed", msec);
console.log("changed to date", d);
