//The splice() method adds new items to an array.
//The slice() method slices out a piece of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let frureturn = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits, frureturn);

/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items
*/
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let returned = fruits1.splice(2, 2, "Lemon", "Kiwi");
console.log("Fruites=>", fruits1);
console.log("return value=>", returned);

//using splice to remove element
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Remove", fruits2.splice(0, 1));

//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
//The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Orange"):
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits3.slice(1);
console.log("fruits3", fruits3);
console.log("citrus", citrus);
