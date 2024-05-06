const myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log("Car 2 is---", myObj.cars.car2);
console.log("Car 2 is---", myObj.cars["car2"]);
console.log("Car 2 is---", myObj["cars"]["car2"]);
