function max(...numbers) {
    //putting 3 dots allows for any number of arguments to be given
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// → 9
/*
When such a function is called, the rest parameter is bound to an
array containing all further arguments. If there are other parameters
before it, their values aren’t part of that array. When, as in max, it is
the only parameter, it will hold all arguments.
*/

//You can use a similar three-dot notation to call a function with an
//array of arguments.

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

//you could also pass it along with other arguments like so - 
//max(9,...numbers, 2)

/*
Square bracket array notation similarly allows the triple-dot operator
to spread another array into the new array
*/

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]