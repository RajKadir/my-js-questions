/*
    Question 6. How to empty an array in JavaScript?

    for e.g. var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
*/

/*
    Answer: reassign the value of arrayList to an empty array (ONLY do this if this is the original reference to the array itself, if its a not then you won't edit the original reference)
*/
console.log("Method 1: reassign the value of arrayList to empty array []: ");
var arrayList = ["a", "b", "c", "d", "e", "f"];
arrayList = [];
console.log(arrayList); // output: []

// Does it clear the original array test:
console.log("Method 1: Does it change the original array?");
var OriginalArrayList = ["a", "b", "c", "d", "e", "f"];
arrayList = OriginalArrayList;
console.log("Before:");
console.log(arrayList);
// Now change it to empty
arrayList = [];
console.log("After:");
console.log(arrayList);
console.log("Original:");
console.log(OriginalArrayList); // Original reference was NOT changed.

/*
    Answer2: set the length of the array to 0
    This will clear the existing array by setting the length to 0. This way of emptying also updates all the reference variables that point to the original array
*/
console.log("Method 2: Set the length of the array to 0: ");
var arrayList2 = ["a", "b", "c", "d", "e", "f"];
arrayList2.length = 0;
console.log(arrayList2); // output: []

// Does it clear the original array test:
console.log("Method 2: Does it clear the original array?");
var arrayOriginal = ["a", "b", "c"];
var referenceArr = arrayOriginal;
referenceArr.length = 0;
console.log(arrayOriginal); // output: [] Original reference WAS changed
console.log(referenceArr); // output: []
