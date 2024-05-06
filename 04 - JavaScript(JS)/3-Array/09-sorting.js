//The sort() method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);

//The reverse() method reverses the elements in an array.
//You can use it to sort an array in descending order:

fruits.reverse();
console.log(fruits);

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
