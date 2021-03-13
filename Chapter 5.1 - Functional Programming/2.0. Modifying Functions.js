//higher-order function that modifies the value it is given

function negate(func) {
    return function(x) {
        return !func(x);
    };
}

var isNotNaN = negate(isNaN);

console.log(isNotNaN(NaN));
//The function returned by negate feeds the argument it is given to
//the original function func and then negates the result

//If you don't know how many arguments you have

//The method apply

function negate(func) {
    return function() {
        return !func.apply(null, arguments);
    };
}

