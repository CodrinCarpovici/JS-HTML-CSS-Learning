//this minus function tries to imitate the - operator by acting on 
//either one or two
arguments
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
    }
    console.log(minus(10));
    // → -10
    console.log(minus(10, 5));
    // → 5

/*
If you write an = operator after a parameter, followed by an expression, 
the value of that expression will replace the argument when it is
not given
*/

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

