//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log("fruits", fruits);
console.log("citrus", citrus);

//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits.slice(2);
console.log("fruits1", fruits1);
console.log("citrus1", citrus1);
