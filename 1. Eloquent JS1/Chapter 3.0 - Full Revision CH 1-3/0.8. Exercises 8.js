//Find the factorial of given number

function factorial(numba) {
    let numbers = [];
    let factorialC = 1;

    for (let i = 0; i < numba; i++){
        numbers.push(numba - i);
        factorialC *= numbers[i];
    }

    return numbers.join("*") + " = " + factorialC;
}

console.log(factorial(5));