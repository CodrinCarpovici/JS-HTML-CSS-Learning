/*
Write a program to create a new string adding "new!" in front of a given
tring. If the given string begins with "New!" already
then return the original string.
*/

const isItNew = (str) =>
    str.indexOf("New!") === 0 ? str : `New! ${str}`;

console.log(isItNew("Offers"));
console.log(isItNew("New! Offers"));