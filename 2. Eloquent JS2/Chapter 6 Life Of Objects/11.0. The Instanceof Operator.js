/*
It is occasionally useful to know whether an object was derived from
a specific class. For this, JavaScript provides a binary operator called
instanceof.
*/

console.log(
new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false
console.log([1] instanceof Array);
// → true
