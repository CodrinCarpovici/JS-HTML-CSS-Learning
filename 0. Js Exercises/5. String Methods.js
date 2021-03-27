/*
Create a new string from a given string taking the first 3 characters and 
the last 3 characters of a string and adding them together. The string
length must be 3 or more, if not, the original string is returned.
*/

const NewString = (str) =>
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);


console.log(NewString("abcdefghj"));
console.log(NewString("abc"));

/*
Extract the first half of a string of even length.
*/

const firstHalf = (str) =>
    str.length % 2 == 0 ? str.slice(0, str.length/2) : "The string is not of even length!";

console.log(firstHalf("abcd"));
console.log(firstHalf("abc"));

/*
Concatenate two strings except their first character
*/

const addStrings = (str1, str2) =>
    str1.slice(1) + str2.slice(1);

console.log(addStrings("Hello ", "there!"));

/*
Check a given string contains 2 to 4 occurences of a specified character
*/

const checkChar = (letter, str) =>
    str.split("")
       .filter(l => l === letter)
       .length; 

const contains2To4 = (letter, str) =>
    checkChar(letter, str) >= 2 && checkChar(letter, str) <= 4;

console.log(contains2To4("o", "ororo"));