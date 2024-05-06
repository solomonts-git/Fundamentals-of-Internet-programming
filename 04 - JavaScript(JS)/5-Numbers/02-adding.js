let x = 10;
let y = 20;
let z = x + y;
console.log("z", z);

// If you add two strings, the result will be a string concatenation:
x = "10";
y = "20";
z = x + y;
console.log("Z string concatination", z);

// This will work:

x = "100";
y = "10";
z = x / y;

// This will also work:
x = "100";
y = "10";
z = x * y;

//And this will work:

x = "100";
y = "10";
z = x - y;

// But this will not work:

x = "100";
y = "10";
z = x + y;
