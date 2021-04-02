/*
The test method is the absolute simplest way to match a regular expression. 
It tells you only whether it matched and nothing else. Regular
expressions also have an exec (execute) method that will return null if
no match was found and return an object with information about the
match otherwise.
*/

let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8

//strings have a similar match method
console.log("one two 100".match(/\d+/));
// → ["100"]

/*
When the regular expression contains subexpressions grouped with
parentheses, the text that matched those groups will also show up in the
array. The whole match is always the first element. The next element is
the part matched by the first group (the one whose opening parenthesis
comes first in the expression), then the second group, and so on.
*/

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]

/*
When a group does not end up being matched at all (for example,
when followed by a question mark), its position in the output array
will hold undefined. Similarly, when a group is matched multiple times,
only the last match ends up in the array.
*/

console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]
