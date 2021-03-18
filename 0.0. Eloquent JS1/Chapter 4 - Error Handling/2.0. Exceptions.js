//Exception Handling

function lastElement(array) {
    if(array.length > 0)
        return array[array.length -1];
    else
        throw "Cannot take the last element of an empty array,";
        //throw is the keyword to raise an exception/ 
        //creating custom errors
}

function lastElementPlusTen(array) {
    return lastElement(array) + 10;
}

try {
//try sets up an obstacle for exceptions//tests the code for errors
    console.log(lastElementPlusTen([]));
}
catch (error) {
//handles the error
    console.log("Something went wrong: ", error);
}

