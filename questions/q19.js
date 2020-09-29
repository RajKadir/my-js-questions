/*
    Question 19. What will be the output of the following code?

    var salary = "1000$";
    (function () {
    console.log("Original salary was " + salary);

    var salary = "5000$";

    console.log("My New Salary " + salary);
    })();
*/

/*
    Answer:
        Because hoisting occurs the variable is pushed to the top of the scope it is in, therefore when we used var again in the function it is pushed to the top with a value of undefined.


        // Actual code behind the scenes:
        var salary = "1000$";
        (function() {
            var salary = undefined;
            console.log("Original salary was " + salary); // Output: Original salary was undefined

            salary = "5000$";
            console.log("My New Salary is " + salary); // Output: My New Salary is 5000$
        })

*/

/*
    Test
*/
var salary = "1000$";
(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary is " + salary);
})();
