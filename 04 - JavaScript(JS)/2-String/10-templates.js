// Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// Variable Substitutions
// Template literals allow variables in strings:
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

// Automatic replacing of variables with real values is called string interpolation.

// Expression Substitution
// Template literals allow expressions in strings:

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// Automatic replacing of expressions with real values is called string interpolation.
