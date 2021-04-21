/*
The most immediately visible part of a programming language is its
syntax, or notation. A parser is a program that reads a piece of text
and produces a data structure that reflects the structure of the program
contained in that text. If the text does not form a valid program, the
parser should point out the error.
The programming language will be called Egg.
*/

/*
do(define(x, 10),
    if(>(x, 5),
        print("large"),
        print("small")))
*/

function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    if (match = /^"([^"]*)"/.exec(program)) {
        expr = { type: "value", value: match[1] };
    } else if (match = /^\d+\b/.exec(program)) {
        expr = { type: "value", value: Number(match[0]) };
    } else if (match = /^[^\s(),#"]+/.exec(program)) {
        expr = { type: "word", name: match[0] };
    } else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }
    return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        return { expr: expr, rest: program };
    }
    program = skipSpace(program.slice(1));
    expr = { type: "apply", operator: expr, args: [] };
    while (program[0] != ")") {
        let arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
            program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}

function parse(program) {
    let { expr, rest } = parseExpression(program);
    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }
    return expr;
}
console.log(parse("+(a, 10)"));
// → {type: "apply",
// operator: {type: "word", name: "+"},
// args: [{type: "word", name: "a"},
// {type: "value", value: 10}]}