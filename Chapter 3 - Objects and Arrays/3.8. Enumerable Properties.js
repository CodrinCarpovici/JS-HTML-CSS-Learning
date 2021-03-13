//Enumerable Properties

for (var name1 in ["Huey", "Dewey", "Louie"])
console.log(name1);

/*
    You will only see 0, 1, and 2, not length, push, or join, 
    which are definitely also in there. 
    It seems some properties of objects are hidden from in loops,
    or, as this is officially called, not enumerable.
*/

//Reason
/*
    All objects have a few methods (for example, toString) 
    that convert the object into some kind of relevant string, 
    and you do not want to see those when you are, for example, 
    looking for the cats that you stored in the object.
*/