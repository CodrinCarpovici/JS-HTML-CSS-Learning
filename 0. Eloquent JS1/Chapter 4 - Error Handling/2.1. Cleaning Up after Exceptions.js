//finally is used so that nomather what happens 
//the code will do this

currentThing = null;

function processThing(thing) {
    var prevThing = currentThing;
    currentThing = thing;
    try {
        /*do complicated processing... */
    }
    finally {
        currentThing = prevThing;
    }
    return currentThing;
}

console.log(processThing("noob"));