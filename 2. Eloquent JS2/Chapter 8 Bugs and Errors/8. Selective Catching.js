/*
Here is an example that attempts to keep on calling promptDirection until 
it gets a valid answer
*/

/*
The for (;;) construct is a way to intentionally create a loop that
doesn’t terminate on its own. We break out of the loop only when
a valid direction is given.
*/
for(;;) {
    try {
        let dir = promtDirection("Where?"); // typo!
        console.log("You chose ", dir);
        break;
    } catch (e) {
        console.log("Not a valid direction. Try again.");
    }
}

/*
But we misspelled promptDirection, which
will result in an “undefined variable” error. Because the catch block
completely ignores its exception value (e), assuming it knows what the
problem is, it wrongly treats the binding error as indicating bad input.
Not only does this cause an infinite loop, it “buries” the useful error
message about the misspelled binding.

As a general rule, don’t blanket-catch exceptions unless it is for the
purpose of “routing” them somewhere—for example, over the network
to tell another system that our program crashed. And even then, think
carefully about how you might be hiding information.
*/

class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

/*
The new error class extends Error. It doesn’t define its own constructor, 
which means that it inherits the Error constructor, which expects
a string message as argument. In fact, it doesn’t define anything at
all—the class is empty. InputError objects behave like Error objects,
except that they have a different class by which we can recognize them.
Now the loop can catch these more carefully.
*/

for(;;) {
    try {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e;
        }
    }
}

/*
This will catch only instances of InputError and let unrelated exceptions 
through. If you reintroduce the typo, the undefined binding error
will be properly reported.
*/


