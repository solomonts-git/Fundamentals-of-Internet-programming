// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log("Random number b/n [0-1)", Math.random());

// Math.random() used with Math.floor() can be used to return random integers.
// There is no such thing as JavaScript integers.
// We are talking about numbers with no decimals here.

// Returns a random integer from 0 to 9:
console.log("Random Number between 0-9", Math.floor(Math.random() * 10));

// Returns a random integer from 0 to 10:
console.log("Random Number between 0-10", Math.floor(Math.random() * 11));

// Returns a random integer from 0 to 99:
console.log("Random Number between 0-99", Math.floor(Math.random() * 100));

// This JavaScript function always returns a random number between min (included) and max (excluded):

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//   This JavaScript function always returns a random number between min and max (both included):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
