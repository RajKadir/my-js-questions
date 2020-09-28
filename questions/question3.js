/* 
    Question 3. What is the drawback of declaring methods directly in JavaScript objects?
*/

/*
    Answer:

    One of the drawbacks of declaring methods directly in JavaScript objects is that they are very memory inefficient.
    When you do that, a new copy of the method is created for each instance of an object. 
*/

/*
    An Example
*/

var Pet = function (name, species, age) {
  this.name = name || "";
  this.species = species || "";
  this.age = age || 0;

  // Creating a method
  this.formatAge = function () {
    return this.age + " " + this.species + " yrs";
  };
};

// Or you can add it to the Pet's prototype object
Pet.prototype.formatAge2 = function () {
  return this.age + " " + this.species + " yrs";
};

// Creating objects now
var dog1 = new Pet("Chewy", "Dog", 7);
var cat1 = new Pet("Muffins", "Cat", 3);

// In each instance variable dog1, cat1, it has its own copy of formatAge method. However the formatAge2 will only be added once to the Pet.prototype
