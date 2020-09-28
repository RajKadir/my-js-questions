// Question 1. What's the difference between undefined and not defined in JavaScript

function undefTest() {
  var x; //declaring x
  console.log(x); // this will output undefined since x is a variable that exists but not defined
}

// x: A variable can be declared but not defined. When we try to access it, it will result `undefined`.

undefTest();

function notdefined() {
  console.log(y); // this will output ReferenceError: y is not defined
}

notdefined();

// y : A variable can be neither declared nor defined. When we try to reference such variable then the result will be `not defined`
