const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits);
// [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]
// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.
