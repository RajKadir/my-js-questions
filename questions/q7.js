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

/*
    Answer 2: You can use isArray if you are using jQuery i.e $.isArray(arrayList)
*/

/*
    Answer 3: In mordern browsers you can use Array.isArray(arrayList)
    IMPORTANT: Array.isArray is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5
*/
