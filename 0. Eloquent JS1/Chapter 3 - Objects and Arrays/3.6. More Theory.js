//The Arguments Object

function  argumentCounter() {
    return "You gave me " + arguments.length + " arguments.";
}

console.log(argumentCounter("Straw man", "Tautology", "Ad hominem"));

//Further uses

function add(number, howmuch) {
    if (arguments.length < 2)
        howmuch = 1;
    return number + howmuch;
}

console.log(add(6));
console.log(add(6, 4));

//Range function with arguments

function range(start, end) {
    if(arguments.length < 2) {
        end = start;
        start = 0;
    }
    var result = [];
    for (var i = start; i <= end; i++)
        result.push(i);
    return result;
}

console.log(range(4));
console.log(range(2, 4));

//Tying up a Loose End

function sum(numbers) {
    var total = 0;

    for (var i = 0; i < numbers.length; i++)
        total += numbers[i];
    return total;
}

console.log(sum(range(1,10)));