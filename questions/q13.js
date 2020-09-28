/*
    Question 13. What will be the output of the following code?
    var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
    delete trees[3];
    console.log(trees.length);
*/

/*
    Answer: 5 because using delete won't affect the array length, instead element [3] will be empty/undefined
*/

var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
