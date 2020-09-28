/*
    Question 14. What will be the output of the following code?
    var bar = true;
    console.log(bar + 0);   
    console.log(bar + "xyz");  
    console.log(bar + true);  
    console.log(bar + false);
*/

var bar = true;
console.log(bar + 0); // 1 + 0 := 1
console.log(bar + "xyz"); // "true" + "xyz" := "truexyz"
console.log(bar + true); // 1 + 1 := 2
console.log(bar + false); // 1 + 0 := 1
