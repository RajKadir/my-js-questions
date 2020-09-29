/*
  Question 16. What will be the output of the following code?
  // NFE (Named Function Expression)
  var foo = function bar() { return 12; };
  typeof bar();
*/

/*
  Answer: ReferenceError, because bar is not a reference variable it is a name of a function, when using typeof we use it on variables that need to be references in this cause type foo() would work.
*/

/*
  Code fixed so that typeof would work
*/
var bar = function () {
  return 12;
};
typeof bar();
