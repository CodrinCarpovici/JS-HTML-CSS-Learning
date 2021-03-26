//Arrays
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

//Methods
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

//Objects
let day1 = { squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
    };

console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

//Properties whose names aren't valid binding names or valid numbers need to be quoted
let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
    };

let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


/*
To find out what properties an object has, you can use the Object.keys
function. You give it an object, and it returns an array of strings—the
object’s property names
*/
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

//there is an Object.assign function that copies all properties from one obj to another

let ObjectA = {a: 1, b: 4};
Object.assign(ObjectA, {b: 3, c: 4});
console.log(ObjectA);
// → {a: 1, b: 3, c: 4}

//Array of Objects
let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
    /* and so on... */
    ];
    