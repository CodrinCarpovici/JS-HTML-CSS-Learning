var a = null;
function b() {return "B";}

(a || b)();

//Closure
function makeAdder(amount) {
    return function(number) {
    return number + amount;
    };
    }
    var addTwo = makeAdder(2);
    console.log(addTwo(3));