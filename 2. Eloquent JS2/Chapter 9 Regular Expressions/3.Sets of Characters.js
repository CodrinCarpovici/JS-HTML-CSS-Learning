/*
Both of the following expressions match all strings that contain a
digit:
*/

console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true

/*
Within square brackets, a hyphen (-) between two characters can be
used to indicate a range of characters, where the ordering is determined
by the character’s Unicode number. 

A number of common character groups have their own built-in shortcuts. 
Digits are one of them: \d means the same thing as [0-9].

\d Any digit character
\w An alphanumeric character (“word character”)
\s Any whitespace character (space, tab, newline, and similar)
\D A character that is not a digit
\W A nonalphanumeric character
\S A nonwhitespace character
. Any character except for newline

So you could match a date and time format like 01-30-2003 15:20
with the following expression:
*/
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

/*
These backslash codes can also be used inside square brackets. For
example, [\d.] means any digit or a period character. But the period
itself, between square brackets, loses its special meaning. The same
goes for other special characters, such as +.

To invert a set of characters—that is, to express that you want to
match any character except the ones in the set—you can write a caret
(^) character after the opening bracket.
*/

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true
