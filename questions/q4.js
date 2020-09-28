/*
    Question 4. What is “closure” in javascript? Can you provide an example?
*/

/*
    Answer
    Closure is a function inside a function (called parent function) and as such it has access to the variables declared and defined within its parent function's scope.
*/

/* 
    Example
*/

var globalVar = "Raj";

// Self invoking functions

(function parentFunc(parentArgs) {
  console.log(globalVar); // output Raj

  (function childFunc(childArgs) {
    console.log(parentArgs); // output 10
    console.log(childArgs); // output 5
    console.log(globalVar); // output Raj
  })(5);
})(10);
