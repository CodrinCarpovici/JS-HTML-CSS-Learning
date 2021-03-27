/*
Tests usually take the form of little labeled programs that verify
some aspect of your code. For example, a set of tests for the (standard,
probably already tested by someone else) toUpperCase method might
look like this:
*/

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
    test("don't convert case-less characters", () => {
    return "ࢩࡑߣడఒ".toUpperCase() == "ࢩࡑߣడఒ";
});

/*
Writing tests like this tends to produce rather repetitive, awkward
code. Fortunately, there exist pieces of software that help you build
and run collections of tests (test suites) by providing a language (in
the form of functions and methods) suited to expressing tests and by
outputting informative information when a test fails. These are usually
called test runners.
*/