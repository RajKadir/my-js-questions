/*
    Question 6. How to empty an array in JavaScript?

    for e.g. var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
*/

/*
    Answer 1: reassign the value of arrayList to an empty array (ONLY do this if this is the original reference to the array itself, if its a not then you won't edit the original reference)
*/
// Self-invoking functions
(function answer1() {
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
})();

/*
    Answer 2: set the length of the array to 0
    This will clear the existing array by setting the length to 0. This way of emptying also updates all the reference variables that point to the original array
*/
(function answer2() {
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
})();

/*
    Answer 3: Use the splice method - This UPDATES all references to the original array
*/
(function answer3() {
  console.log("Method 3: Use the splice method on the array");
  var arrayListSplice = ["a", "b", "c", "d", "e", "f"];
  arrayListSplice.splice(0, arrayListSplice.length);
  console.log(arrayListSplice);
})();

/*
    Answer 4: Loop through the array and pop the values out the array (NOT recommended way)
*/
(function answer4() {
  console.log("Method 4: Loop and pop values out");
  var arrayListPop = ["a", "b", "c", "d", "e", "f"];
  while (arrayListPop.length) {
    arrayListPop.pop();
  }
  console.log(arrayListPop);
})();
