const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
//The solution is to write a compare function to compare the property values
cars.sort(function (a, b) {
  return a.year - b.year;
});

//Comparing string properties is a little more complex

cars.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
