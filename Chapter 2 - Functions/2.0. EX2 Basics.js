//Power Calculator

function circuitPower(voltage, current){
    return voltage * current;
}
console.log(circuitPower(480, 20));

//Return the Number from Given integer

function addition(numba){
    return numba + 1;
}

console.log(addition(0));

//Return String

function gimmeSomething(thing){
    return "Something" + " " + thing;
}
console.log(gimmeSomething("is better than nothing"));

//Less than 100

function lessThan100(first, second){
    if (first + second < 100 )
        return true;
    else
        return false;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(88, 34));