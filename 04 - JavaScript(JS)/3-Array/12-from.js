//The Array.from() method returns an Array object from any object with a length property or any iterable object.

console.log(Array.from("ABCDEFG"));

let names = Array.from("Solomon");

let namereversed = names.reduceRight((total, value) => {
  return total + value;
});
console.log("reveresed name", namereversed);
