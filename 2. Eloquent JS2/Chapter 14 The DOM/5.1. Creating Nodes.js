/*
If you want a solid collection of nodes, as opposed to a live one, you
can convert the collection to a real array by calling Array.from.
*/

let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish);
console.log(array.map(s=> s.toUpperCase()));
// → ["ONE", "TWO"]