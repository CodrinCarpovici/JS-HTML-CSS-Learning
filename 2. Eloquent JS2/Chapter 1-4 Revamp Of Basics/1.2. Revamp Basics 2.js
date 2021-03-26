/*
The rules for converting strings and numbers to Boolean values state 
that 0, NaN, and the empty string ("") count as false, while all the 
other values count as true. So 0 || -1 produces -1, and "" || "!?" 
yields "!?".
*/

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes


//Bindings

let caught = 1;
const constant = 10;
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

//Keywords reserved
/*
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
*/
