async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    resolve("I love You !!");
  });
  console.log(await myPromise);
}

myDisplay();
