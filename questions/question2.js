/* Question 2. For which value of x the results of the following statements are not the same?
    if( x <= 100 ) {...}
    if( !(x > 100) ) {...}
*/

/* Answer: 
    NaN <= 100 is false
    NaN > 100 is false
    so if x is NaN the statements are not the same

    This holds true for any value of x being converted to type Number, returns NaN, e.g. undefined, [1,2,3], {a:20}

    Pay attention: NaN can't be equal, less than or more than any other numerical value, so the only reliable way to check if the value is NaN, is to use the isNaN() function

*/

var x = NaN;

if (x <= 100) {
  console.log("I am the first test"); // This won't run
  console.log(x);
}

if (!(x > 100)) {
  console.log("I am the second test"); // This will run because !false is true
  console.log(x);
}

// Therefore the statements are NOT the same
