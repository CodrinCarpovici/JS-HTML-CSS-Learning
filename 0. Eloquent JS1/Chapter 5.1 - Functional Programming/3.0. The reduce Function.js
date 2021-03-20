function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
    action(array[i]);
    }//forEach for testing purposes
    
//The sum function is really a variant of an algorithm
//that is usually called reduce or fold

function reduce(combine, base, array) {
    forEach(array, function (element){
        base = combine(base, element);
    });
    return base;
}

function add(a, b) {
    return a + b;
}

function sum(numbers) {
    return reduce(add, 0, numbers);
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]));

//Takes an array of numbers as its arguments and returns the amount of zeros
//that occur in it

function countZeros(array) {
    function counter(total, element) {
        return total + (element === 0 ? 1:0);
        //if the condition before the ? is true the first number(option)
        //is chosen, if not then the one after the :
    }
    return reduce(counter, 0, array);
}

console.log(countZeros([1, 0, 0, 0, 1, 1, 1]));

//Another algorithm function, count

function count(test, array) {
    var counted = 0;
    forEach(array, function(element){
        if (test(element)) counted++;
    });
    return counted;
}

function countZeros(array) {
    function isZero(x) {return x === 0;}
    return count(isZero, array);
}

console.log(countZeros([1, 0, 0, 0, 1, 1, 1]));