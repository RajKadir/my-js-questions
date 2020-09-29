/*
    Question 18. In which case the function definition is not hoisted in JavaScript?
*/

/*
    Answer:

        Note the function expression:
            var foo = function foo() {
                return 12;
            }

        In JavaScript var variables and functions are hoisted. Basically the JavaScript interpreter looks ahead to find all the variable declarations and hoists them to the top of the function where it's declared:
        foo()
        var foo = function foo(){
            return 12;
        }

        Behind the scenes it will look like this
        var foo = undefined;
        foo(); // here foo is undefined
        foo = function foo(){
            return 12;
        }

        then:
        var foo = undefined;
        foo = function foo(){
            return 12;
        }
        foo(); // Now foo is defined here


        In summary: Before all the code is ran, JS first gets all declarations and puts them to the top, hoisting is the name of this process.
*/
