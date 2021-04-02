/*
Regular expression objects have a number of methods. The simplest
one is test. If you pass it a string, it will return a Boolean telling you
whether the string contains a match of the pattern in the expression.
*/

let re1 = new RegExp("abc");

console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false