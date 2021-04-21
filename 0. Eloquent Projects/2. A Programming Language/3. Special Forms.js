/*
The specialForms object is used to define special syntax in Egg. It
associates words with functions that evaluate such forms. It is currently
empty. Let’s add if.
*/

specialForms.if = (args, scope) => {
    if (args.length != 3) {
        throw new SyntaxError("Wrong numbers of args to if");
    } else if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope);
    } else {
        return evaluate(args[2], scope);
    }
};

/*
Egg’s if construct expects exactly three arguments. It will evaluate
the first, and if the result isn’t the value false, it will evaluate the
second. Otherwise, the third gets evaluated. This if form is more
similar to JavaScript’s ternary ?: operator than to JavaScript’s if. It
is an expression, not a statement, and it produces a value, namely, the
result of the second or third argument.
Egg also differs from JavaScript in how it handles the condition value
to if. It will not treat things like zero or the empty string as false, only
the precise value false.
The reason we need to represent if as a special form, rather than a
regular function, is that all arguments to functions are evaluated before
the function is called, whereas if should evaluate only either its second
or its third argument, depending on the value of the first.
The while form is similar.
*/

specialForms.while = (args, scope) => {
    if (args.length != 2) {
        throw new SyntaxError("Wrong number of args to while");
    }
    while (evaluate(args[0], scope) !== false) {
        evaluate(args[1], scope);
    }

    // Since undefined does not exist in Egg, we return false,
    // for lack of a meaningful result.
    return false;
};

/*
Another basic building block is do, which executes all its arguments
from top to bottom. Its value is the value produced by the last argument.
*/

specialForms.do = (args, scope) => {
    let value = false;
    for(let arg of args) {
        value = evaluate(arg, scope);
    }
    return value;
};

/*
To be able to create bindings and give them new values, we also
create a form called define. It expects a word as its first argument
and an expression producing the value to assign to that word as its
second argument. Since define, like everything, is an expression, it
must return a value. We’ll make it return the value that was assigned
(just like JavaScript’s = operator).
*/

specialForms.define = (args, scope) => {
    if (args.length != 2 || args[0].type != "word") {
        throw new SyntaxError("Incorrect use of define");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
};


