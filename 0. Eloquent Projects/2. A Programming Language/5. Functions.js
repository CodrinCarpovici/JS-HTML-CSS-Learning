/*
A programming language without functions is a poor programming language indeed.
Fortunately, it isn’t hard to add a fun construct, which treats its last
argument as the function’s body and uses all arguments before that as
the names of the function’s parameters.
*/

specialForms.fun = (args, scope) => {
    if (!args.length) {
        throw new SyntaxError("Functions need a body");
    }
    let body = args[args.length - 1];
    let params = args.slice(0, args.length - 1).map(expr => {
        if (expr.type != "word") {
            throw new SyntaxError("Parameter names must be words");
        }
        return expr.name;
    });
    return function () {
        if (arguments.length != params.length) {
            throw new TypeError("Wrong number of arguments");
        }
        let localScope = Object.create(scope);
        for (let i = 0; i < arguments.length; i++) {
            localScope[params[i]] = arguments[i];
        }
        return evaluate(body, localScope);
    };
};

/*
Functions in Egg get their own local scope. The function produced
by the fun form creates this local scope and adds the argument bindings
to it. It then evaluates the function body in this scope and returns the
result.
*/

run(`
do(define(plusOne, fun(a, +(a, 1))),
    print(plusOne(10)))
`);
// → 11

run(`
do(define(pow, fun(base, exp,
    if(==(exp, 0),
        1,
        *(base, pow(base, -(exp, 1)))))),
    print(pow(2, 10)))
`);
// → 1024
