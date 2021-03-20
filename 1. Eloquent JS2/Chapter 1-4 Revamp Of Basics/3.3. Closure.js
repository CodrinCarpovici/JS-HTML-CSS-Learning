function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

//Both instances of the biding can still be accesed

//with a slight change we can turn the previous example 
//into a way to create functions that multiply by an arbitrary amount

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
/*
In the example, multiplier is called and creates an environment in
which its factor parameter is bound to 2. The function value it returns,
which is stored in twice, remembers this environment. So when that is
called, it multiplies its argument by 2.
*/

