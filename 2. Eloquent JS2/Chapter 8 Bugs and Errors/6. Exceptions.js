/*
Exceptions (throw) :
it jumps out of not just the current function but also
its callers, all the way down to the first call that started the current
execution. This is called unwinding the stack. 
Their power lies in the fact that you can set
“obstacles” along the stack to catch the exception as it is zooming down.
Once you’ve caught an exception, you can do something with it to
address the problem and then continue to run the program.
*/

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if(promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}

/*
The throw keyword is used to raise an exception. Catching one is done
by wrapping a piece of code in a try block, followed by the keyword
catch. When the code in the try block causes an exception to be raised,
the catch block is evaluated, with the name in parentheses bound to
the exception value. After the catch block finishes—or if the try block
finishes without problems—the program proceeds beneath the entire
try/catch statement.
*/