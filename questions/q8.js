/*
    Question 8. What will be the output of the following code?

    var output = (function(x) {
        delete x;
        return x;
    })(0);

    console.log(output);
*/
var output = (function (x) {
  delete x; // does nothing
  return x; // return 0 (self invoked function args)
})(0);

console.log(output); // Output is 0

/* Summary:
    - Since delete only works on objects and x is a local variable not an object nothing happens.
    - Delete operator does not affect local variables. 
    - Delete operator is used to delete properties from objects.
*/
