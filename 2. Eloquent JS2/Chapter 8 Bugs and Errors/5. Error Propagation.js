function promptNumber(question) {
    let result = Number(prompt(question));
    if(Number.isNaN(result)) return null;
    else return result;
}

console.log(promptNumber("How many trees do you see?"));

//what if the function can return any kind of value

function lastelement(array) {
    if (array.length == 0) {
        return {failed: true};
    } else {
        return {element: array[array.length - 1]};
    }
}