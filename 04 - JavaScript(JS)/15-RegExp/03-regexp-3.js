/*
    Using exec()
    The exec() method is a RegExp expression method.
    It searches a string for a specified pattern, and returns the found text as an object.
    If no match is found, it returns an empty (null) object.
    The following example searches a string for the character "e":

*/
let teste = /e/g.exec("The best things in life are free!");
console.log(teste);

if (teste) {
  console.log("it is an object");
}
