/*
To use an operator like * or + on more than one element at a time,
you have to use parentheses. A part of a regular expression that is
enclosed in parentheses counts as a single element as far as the operators
following it are concerned.
*/

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true

/*
The first and second + characters apply only to the second o in boo
and hoo, respectively. The third + applies to the whole group (hoo+),
matching one or more sequences like that.
The i at the end of the expression in the example makes this regular
expression case insensitive, allowing it to match the uppercase B in the
input string, even though the pattern is itself all lowercase.
*/