/*
    Question 20. What’s the difference between typeof and instanceof?
*/

/*
    Answer:
        My answer: 
            instanceof tells me the object/class a reference belongs to, typeof tells me the data type of a variable -> good enough :)

        detailed answer: 
            typeof is an operator that returns a string 
            with the type of whatever you pass (one of the seven basic types i.e number, string, boolean, object, function, undefined or Symbol).
            typeof(null) would return the string 'object'

            instanceof returns true or false. 
            it works on the level of prototypes. 
            instanceof does not work on primitive types. 
            instanceof operator checks the current object and returns true if the object is of the specified type on the right.
            for example:
                var dog = new Animal();
                dog instanceof Animal; // Output: true
*/
