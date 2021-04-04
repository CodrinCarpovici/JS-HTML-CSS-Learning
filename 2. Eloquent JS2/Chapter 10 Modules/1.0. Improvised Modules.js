/*
This is a module for going between day names and numbers (as returned by 
Date’s getDay method). Its interface consists of weekDay.name
and weekDay.number, and it hides its local binding names inside the scope
of a function expression that is immediately invoked.
*/

const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];
    return {
        name(number) {return names[number];}
    };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday

/*
This style of modules provides isolation, to a certain degree, but it
does not declare dependencies. Instead, it just puts its interface into
the global scope and expects its dependencies, if any, to do the same.
For a long time this was the main approach used in web programming,
but it is mostly obsolete now.
If we want to make dependency relations part of the code, we’ll have
to take control of loading dependencies. Doing that requires being able
to execute strings as code. JavaScript can do this.
*/