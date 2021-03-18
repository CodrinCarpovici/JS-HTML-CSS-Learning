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
