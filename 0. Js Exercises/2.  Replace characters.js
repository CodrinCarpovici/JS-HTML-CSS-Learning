/*
Replace every character in a given string with the character following
it in the alphabet
*/
const moveChars = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveChars("abcdefg"));