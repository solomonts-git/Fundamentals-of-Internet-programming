/* 
There are no built-in functions for finding the max or min value in an array.
However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
Sorting ascending:
*/

const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function (a, b) {
  return a - b;
});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

//Sorting descending:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

//Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

//Using Math.max() on an Array

const pointsMax = [40, 100, 1, 5, 25, 10];
let max = Math.max.apply(null, pointsMax);
console.log("Max...", max);

//Using Math.min() on an Array

const pointsMin = [40, 100, 1, 5, 25, 10];
let min = Math.min.apply(null, pointsMin);
console.log("Min...", min);

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
