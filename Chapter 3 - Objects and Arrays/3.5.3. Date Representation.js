//2 ways

//creating an object with 3 properties
var when = {year: 1980, month: 2, day: 1};

//JS already has an object for this kind of purpose
var when = new Date(1980, 1, 1);

//new is a way to create object values
//functions like these are called constructs

//Ways to use the date constructor

//Produces a date object for the current time.
new Date();

//February (!) 1st, 1980
new Date(1980, 1, 1);

//March 30th, 2007, 30 seconds past 8:20
new Date(2007, 2, 30,8, 20, 30);

//the order of the arguments is: 
//year, month, day, hour, minute, second, miliseconds
//the last 4 are optional and default to 0 if no value is given

//Month numbers go from 0 to 11
//day numers start from 1

var today = new Date();

console.log("Year: ", today.getFullYear(), ", month: ", today.getMonth(),
            ", day: ", today.getDate());
console.log("Hour: ", today.getHours(), ", minutes: ",
            today.getMinutes(), ", seconds: ", today.getSeconds());
console.log("Day of week: ", today.getDay());

//2 objects with the same properties when compared will return false

//Method to compare 2 objects with the same dates
var wende1 = new Date(1989, 10, 9),
    wende2 = new Date(1989, 10, 9);

console.log(wende1.getTime() == wende2.getTime());
console.log(wende1, wende2);

//.getTimezoneOffset function used to find out
//how many minutes it differs from GMT

console.log(new Date().getTimezoneOffset());