const d = new Date();
// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
console.log("to string", d.toString());

// The toUTCString() method converts a date to a UTC string (a date display standard).

console.log("to UTCString", d.toUTCString());

// The toDateString() method converts a date to a more readable format:

console.log("to Date String", d.toDateString());

// The toISOString() method converts a Date object to a string, using the ISO standard format:

console.log("to ISO string", d.toISOString());
