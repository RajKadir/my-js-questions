/*
    Question 5. Write a mul function which will work properly when invoked with following syntax.

    console.log(mul(2)(3)(4)); // output : 24
    console.log(mul(4)(3)(4)); // output : 48
*/

/*

    Answer: a function that looks like this func(x)(y)(z) means we need to be returning multiple anonymous functions

*/

// Self-invoking function
function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));

/*
    In Javascript, a function defined inside another function has access to the outer function's scope and can consequently return, interact with or pass on to other functions, the variables belonging to the scopes that incapsulate it.

    A function is an instance of the Object type
    A function can have properties and has a link to its constructor method
    A function can be stored as a variable
    A function can be passed as a parameter to another function
    A function can be returned by another function
*/
