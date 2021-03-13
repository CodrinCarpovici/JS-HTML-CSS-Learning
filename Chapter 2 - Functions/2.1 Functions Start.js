function square(x){
    return x * x;
}

console.log(square(12));

function power(base, exponent){
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(2, 10));

//Definition Order
console.log("The future says: ", future());

function future(){
    return "We STILL have no flying cars!";
}

//Nested Scope
function multiplyAbsolute(number, factor) {
    function multiply(number) {
        return number * factor;
    }
    if (number < 0)
        return multiply(-number);
    else
        return multiply(number);
    }
console.log(multiplyAbsolute(-2, -3));


