/*
    Question 15. What will be the output of the following code?
    var z = 1, y = z = typeof y;
    console.log(y);
*/

/*

    According to associativity rule operator, this will print undefined. 

    The association of the assignment operator is Right to Left so type of y will evaluate first which is string "undefined"
    and assigned to z and then y would be assigned to the value of z


    Order:
    1. typeof y = "undefined"
    2. "undefined" = z
    3. y = z
    4. y = undefined
    5. output: undefined

*/

var z = 1, y = (z = typeof y);
console.log(y);
