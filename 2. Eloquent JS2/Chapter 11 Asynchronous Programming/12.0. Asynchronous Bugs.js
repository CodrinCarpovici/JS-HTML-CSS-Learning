/*
When your program runs synchronously, in a single go, there are no
state changes happening except those that the program itself makes.
For asynchronous programs this is different—they may have gaps in
their execution during which other code can run.
Let’s look at an example. One of the hobbies of our crows is to
count the number of chicks that hatch throughout the village every
year. Nests store this count in their storage bulbs. The following code
tries to enumerate the counts from all the nests for a given year:
*/

function anyStorage(nest, source, name) {
    if (source == nest.name) return Storage(nest, name);
    else return routeRequest(nest, source, "storage", name);
}

async function chicks(nest, year) {
    let list = "";
    await Promise.all(network(nest).map(async name => {
        list += `${name}: ${await anyStorage(nest, name, `chicks in ${year}`)
            }\n`;
    }));
    return list;
}

/*
The async name => part shows that arrow functions can also be made
async by putting the word async in front of them.
The code doesn’t immediately look suspicious...it maps the async
arrow function over the set of nests, creating an array of promises, and
then uses Promise.all to wait for all of these before returning the list
they build up.
But it is seriously broken. It’ll always return only a single line of
output, listing the nest that was slowest to respond.

The problem lies in the += operator, which takes the current value of
list at the time where the statement starts executing and then, when
the await finishes, sets the list binding to be that value plus the added
string.
But between the time where the statement starts executing and the
time where it finishes there’s an asynchronous gap. The map expression
runs before anything has been added to the list, so each of the += operators starts from an empty string and ends up, when its storage retrieval
finishes, setting list to a single-line list—the result of adding its line
to the empty string.
This could have easily been avoided by returning the lines from the
mapped promises and calling join on the result of Promise.all, instead
of building up the list by changing a binding. As usual, computing new
values is less error-prone than changing existing values.
*/

async function chicks(nest, year) {
    let lines = network(nest).map(async name => {
        return name + ": " +
            await anyStorage(nest, name, `chicks in ${year}`);
    });
    return (await Promise.all(lines)).join("\n");
}
