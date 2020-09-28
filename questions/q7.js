/*
    Question 7. How to check if an object is an array or not?
*/

/*
    Answer: use the toString method to check class type on Object.prototype
*/
var arrayList = ["a", "b", "c"];
console.log(Object.prototype.toString.call(arrayList)); // output: [object Array]

if (Object.prototype.toString.call(arrayList) === "[object Array]") {
  console.log("This is an array");
}

// Proof on objects
var objectVar = {
  x: "hello",
};
console.log(Object.prototype.toString.call(objectVar)); // output: [object Object]
