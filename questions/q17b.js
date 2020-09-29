/*
    Question 17b. What is the output of the following?
    bar();
    (function abc(){console.log('something')})();
    function bar(){console.log('bar got called')};
*/

/*
    Answer:
        Here bar() is a function statement and was created during parse-time, abc is being invoked after
        Output:
            bar got called
            something

*/

/*
    Test
*/
bar();
(function abc() {
  console.log("something");
})();
function bar() {
  console.log("bar got called");
}
