//abstraction
/*
for(i = 0; i < 10; i++) {
    console.log(i);
}

//into a function
function repeatLog(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}
*/
//into this form
function repeat (n, action) {
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

let labels =[];
repeat(5, i => { labels.push(`Unit ${i + 1}`); });
console.log(labels);

/*
Higher-order functions allow us to abstract over actions, not just
values. They come in several forms. For example, we can have functions
that create new functions.
*/

function gratherThan(n) {
    return m => m > n;
}
let greaterThan10 = gratherThan(10);
console.log(greaterThan10(11));

//Functions that change other functions
function noisy(f) {
    return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
    };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

//We can even write functions that provide new types of control flow.
function unless(test, then) {
    if(!test) then();
}

function repeat (n, action) {
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, n=> {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

/*
There is a built-in array method, forEach, that provides something
like a for/of loop as a higher-order function.
*/
["A", "B"].forEach(l => console.log(l));
// → A
// → B