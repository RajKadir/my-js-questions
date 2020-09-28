/*
    Question 11. What will be the output of the following code?

    var Employee = {
        company: 'xyz'
    }
    var emp1 = Object.create(Employee);
    delete emp1.company
    console.log(emp1.company);
*/

/*
    Answer: 
        the console will produce 'xyz' because Object got company as a **prototype** property, delete doesn't delete prototype properly.
        you can use the hasOwnProperty('company') on emp1 to check which will output false, because it doesn't have its own property of company, the prototype does

        In order to delete it we can do: delete Employee.company or delete emp1.__proto__.company
*/

// Run sample code, it doesn't delete and outputs xyz
(function sampleCode() {
  var Employee = {
    company: "xyz",
  };
  var emp1 = Object.create(Employee);
  delete emp1.company;
  console.log(emp1.company);
})();

// To delete it method 1:
(function deleteMethod1() {
  var Employee = {
    company: "xyz",
  };
  var emp1 = Object.create(Employee);
  delete Employee.company;
  console.log(emp1.company); // outputs undefined
})();

// To delete it method 2:
(function deleteMethod2() {
  var Employee = {
    company: "xyz",
  };
  var emp1 = Object.create(Employee);
  delete emp1.__proto__.company;
  console.log(emp1.company);
})();
