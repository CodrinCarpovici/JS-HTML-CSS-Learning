/*
Everything
Analogous to the some method, arrays also have an every method. This
one returns true when the given function returns true for every element
in the array. In a way, some is a version of the || operator that acts on
arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate
function as parameters. Write two versions, one using a loop and one
using the some method.
*/

function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
}
  
function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}
  
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

/*
Dominant writing direction
Write a function that computes the dominant writing direction in a
string of text. Remember that each script object has a direction 
property that can be "ltr" (left to right), "rtl" (right to left), or 
"ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters 
that have a script associated with them. The characterScript and countBy 
functions defined earlier in the chapter are probably useful here.
*/

function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl