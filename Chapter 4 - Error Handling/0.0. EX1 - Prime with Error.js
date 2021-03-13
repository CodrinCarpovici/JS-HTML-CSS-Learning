// Print if given number is prime or not

function Prime(numba) { 
    for(var i = 2; i < numba; i++){
        if(numba % i == 0)
            return numba + " is not a prime number";
        else
            return numba + " is a prime number";
    }

    try {
        if(numba == "") throw "empty";
        if(isNaN(numba)) throw "not a number";
        numba = Number(numba);
        if(numba < 15) throw "too low";
        if(numba > 25) throw "too high";
    }
    
    catch (error) {
        console.log("Something went wrong: ", error);
    }
}


console.log(Prime(""));