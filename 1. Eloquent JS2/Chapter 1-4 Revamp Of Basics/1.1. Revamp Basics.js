let total = 0, count = 1;
while(count<=10) {
    total += count;
    count++;
}

console.log(total);
//let is better than var generally

let string = "This is the first line\nAnd this is the second";
let string2 = "\\";
let string3 = "This is how you show \" in JS";

console.log(string, "\n", string2, "\n", string3);
//a \n means a new line
// 2 \\ will collapse onto each other
// a single \ means the character to follow is a special caracter

let string4 = `half of 100 is ${100/2}`;
console.log(string4);

/*When you write something inside ${} in a template literal, its result
will be computed, converted to a string, and included at that position.
The example produces “half of 100 is 50”.
*/


console.log(typeof 4.5);
console.log(typeof "x");

//the tyeof operator produces a string naming the type of the value you gave it


console.log(true ? 1 : 2);
console.log(false ? 1 : 2);


//JS goes out of its way to make things work
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
console.log(null == undefined);
// → true
console.log(null == 0);
// → false