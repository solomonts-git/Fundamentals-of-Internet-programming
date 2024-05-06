const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
// The concat() method creates a new array by merging (concatenating) existing arrays:
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//The concat() method does not change the existing arrays. It always returns a new array.

//The concat() method can take any number of array arguments:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1);
