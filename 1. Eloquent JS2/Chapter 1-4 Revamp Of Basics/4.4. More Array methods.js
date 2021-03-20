let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}
/*
That program manages a queue of tasks. You add tasks to the end
of the queue by calling remember("groceries"), and when you’re ready
to do something, you call getTask() to get (and remove) the front item
from the queue. The rememberUrgently function also adds a task but
adds it to the front instead of the back of the queue.
*/

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

/*
To search for a specific value, arrays provide an indexOf method.
The method searches through the array from the start to the end and
returns the index at which the requested value was found—or -1 if it
wasn’t found. To search from the end instead of the start, there’s a
similar method called lastIndexOf.
*/

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

//The start index is inclusive, the end index is exclusive

function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index +1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

/*
If you pass concat an argument that is not an array, that value will
be added to the new array as if it were a one-element array.
*/