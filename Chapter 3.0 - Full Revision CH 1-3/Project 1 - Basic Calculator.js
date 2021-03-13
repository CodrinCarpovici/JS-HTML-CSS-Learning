/*
    Create a calculator capable of adding(+), substracting(-),
    multiplying(*), dividing(/), raising to the power of x,
    finding the square root of the number and finding the remainder
    of a division.
*/

function calculatorC(number1, number2){

    var result = 0;
    var number1 = Number(prompt("", ""));
    var number2 = Number(prompt("", ""));
    var operatorC = String(prompt("", ""));

    if (operatorC == "+")
        return result = addC(number1, number2);
    else if (operatorC == "-")
        return result = substractC(number1, number2);
    else if (operatorC == "*")
        return result = multiplyC(number1, number2);
    else if (operatorC == "/")
        return result = divideC(number1, number2);
    else if (operatorC == "%")
        return result = remainderC(number1, number2);
    else if (operatorC == "pow")
        return result = powerC(number1, number2);
    else if (operatorC == "sqr")
        return result = sqrRootC(number1, number2);
    else
        alert("Operator Invalid!");

    function addC(number1, number2) {
        return number1 + number2;
    }

    function substractC(number1, number2) {
        return number1 - number2;
    }

    function multiplyC(number1, number2) {
        return number1 * number2;
    }

    function divideC(number1, number2) {
        return number1 / number2;
    }

    function remainderC(number1, number2) {
        return number1 % number2;
    }

    function powerC(number1, number2) {
        return Math.pow(number1, number2);
    }

    function sqrRootC(number1) {
        return Math.sqrt(number1);
    }
}