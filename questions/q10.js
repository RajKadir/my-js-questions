/*
    Question 10. What will be the output of the following code?
    var x = { foo : 1};
    var output = (function() {
    delete x.foo;
    return x.foo;
    })();

    console.log(output);
*/

/*
    Answer: 
        the following will output undefined 
        because we deleted the foo property from an object and therefore foo no longer exists on the object, then we try to call the foo property which no longer exists
        IMPORTANT: not to be confused with the object itself being undefined, x still exists as {} but no longer has foo.
*/

var x = { foo: 1 };
var output = (function () {
  delete x.foo;
  return x.foo;
})();

console.log(output);

// IMPORTANT: not to be confused with the object itself being undefined, x still exists as {} but no longer has foo.
var y = { foo: 1 };
var output = (function () {
  delete y.foo;
  return y;
})();

console.log(output);
