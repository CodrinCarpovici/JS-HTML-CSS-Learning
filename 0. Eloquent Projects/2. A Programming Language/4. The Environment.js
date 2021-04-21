/*
The scope accepted by evaluate is an object with properties whose
names correspond to binding names and whose values correspond to the
values those bindings are bound to. Let’s define an object to represent
the global scope.
To be able to use the if construct we just defined, we must have
access to Boolean values. Since there are only two Boolean values, we
do not need special syntax for them. We simply bind two names to the
values true and false and use them.
*/

const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;

//We can now evaluate a simple expression that negates a Boolean value.

/*
To supply basic arithmetic and comparison operators, we will also
add some function values to the scope. In the interest of keeping the
code short, we’ll use Function to synthesize a bunch of operator functions 
in a loop, instead of defining them individually.
*/

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
    topScope[op] = Function("a, b", `return a ${op} b;`);
}

//A way to output values is also useful, so we’ll wrap console.log in a
//function and call it print.

topScope.print = value => {
    console.log(value);
    return value;
};

/*
That gives us enough elementary tools to write simple programs. The
following function provides a convenient way to parse a program and
run it in a fresh scope:
*/

function run(program) {
    return evaluate(parse(program), Object.create(topScope));
}

/*
We’ll use object prototype chains to represent nested scopes so that
the program can add bindings to its local scope without changing the
top-level scope.
*/

run(`
do(define(total, 0),
    define(count, 1),
    while(<(count, 11),
    do(define(total, +(total, count)),
    define(count, +(count, 1)))),
    print(total))
`);
// → 55

/*
This is the program we’ve seen several times before, which computes
the sum of the numbers 1 to 10, expressed in Egg. It is clearly uglier
than the equivalent JavaScript program—but not bad for a language
implemented in less than 150 lines of code.
*/