/*
You could add a comment like the following before the goalOrientedRobot
function from the previous chapter to describe its type:
// (VillageState, Array) → {direction: string, memory: Array}
function goalOrientedRobot(state, memory) {
// ...
}

There are a number of different conventions for annotating JavaScript
programs with types.
One thing about types is that they need to introduce their own complexity 
to be able to describe enough code to be useful. What do you
think would be the type of the randomPick function that returns a random 
element from an array? You’d need to introduce a type variable,
T, which can stand in for any type, so that you can give randomPick a
type like ([T])→ T (function from an array of Ts to a T).

When the types of a program are known, it is possible for the computer to
check them for you, pointing out mistakes before the program
is run. There are several JavaScript dialects that add types to the 
language and check them. The most popular one is called TypeScript.
*/