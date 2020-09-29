/*
    Question 17a. What is the difference between declaring a function in the formats listed below?

    var foo = function() {
        // Some code
    }

    function bar () {
        // Some code
    }
*/

/*
    Answer:
        The difference is that the function 'foo' is declared at 'run-time' and is called a 'function expression'. 
        Where as the function 'bar' is defined at 'parse time' and is called a 'function statement'.
*/

/* 
    Example of showing the difference between run-time and parse time
*/

// Parse-Time function declaration
bar(); // Call bar function here, It will not give an Error because we created bar at parse-time and so we can use it anywhere
function bar() {
  console.log("Hi I am inside Foo");
}

// Run-Time function declaration
foo(); // Call foo function here, It will give an error because we created foo at run-time, and at this current moment, the function foo() doesn't exist
var foo = function () {
  console.log("Hi I am inside Foo");
};
