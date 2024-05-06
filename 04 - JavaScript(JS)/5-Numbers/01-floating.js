// Floating point arithmetic is not always 100% accurate:

let x = 0.2 + 0.1;
console.log("x is not correct", x);

// To solve the problem above, it helps to multiply and divide:

x = (0.2 * 10 + 0.1 * 10) / 10;
console.log("x now is correct", x);
