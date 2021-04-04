/*
One aspect of module design is ease of use. If you are designing
something that is intended to be used by multiple people—or even by
yourself, in three months when you no longer remember the specifics of
what you did—it is helpful if your interface is simple and predictable.
That may mean following existing conventions. A good example is
the ini package. This module imitates the standard JSON object by
providing parse and stringify (to write an INI file) functions, and, like
JSON, converts between strings and plain objects. So the interface is
small and familiar, and after you’ve worked with it once, you’re likely
to remember how to use it.

This points to another helpful aspect of module design—the ease with
which something can be composed with other code. Focused modules
that compute values are applicable in a wider range of programs than
bigger modules that perform complicated actions with side effects. An
INI file reader that insists on reading the file from disk is useless in a
scenario where the file’s content comes from some other source.
*/

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const {find_path} = require("dijkstrajs");

let graph = {};
for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    for (let dest of roadGraph[node]) {
        edges[dest] = 1;
    }
}

console.log(find_path(graph, "Post Office", "Cabin"));
// → ["Post Office", "Alice's House", "Cabin"]

/*
This can be a barrier to composition—when various packages are
using different data structures to describe similar things, combining
them is difficult. Therefore, if you want to design for composability,
find out what data structures other people are using and, when possible,
follow their example.
*/