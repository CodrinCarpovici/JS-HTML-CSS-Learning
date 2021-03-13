// Print if given number is prime or not

function Prime(numba) { 
    for(var i = 2; i < numba; i++){
        if(numba % i == 0)
            return numba + " is not a prime number";
        else
            return numba + " is a prime number";
    }
}

console.log(Prime(17));

