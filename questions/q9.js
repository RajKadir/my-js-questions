/*
    Question 9. What will be the output of the following code?
    var x = 1;
    var output = (function() {
    delete x;
    return x;
    })();
    console.log(output);
*/

/*
    Answer x is still not an object, it is a global variable of type number, delete only affects properties on objects therefore the answer is still 1
*/
var x = 1;
var output = (function () {
  delete x;
  return x;
})();
console.log(output);
