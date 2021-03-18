//Swap 2 numbers without temp variable

function swapN(no1, no2) {
    [no1, no2] = [no2, no1];
    return no1 + " " + no2;
}

console.log(swapN(1, 2));

//Print if number is odd or even

function oddOrEven(numba) {
    if (numba%2 == 0)
        return "even";
    else
        return "odd";
}

console.log(oddOrEven(12));

//Find the largest of 3 numbers

function largest(no1, no2, no3) {
    return Math.max(no1, no2, no3);
}

console.log(largest (1, 2, 3));

//Find if numbers is divisible by both 4 and 7

function findD(numba) {
    if (numba%4 == 0 && numba%7 == 0)
        return "yes it is divisible by both 4 and 7";
    else
        return "no it's not divisible by both 4 and 7";
}

console.log(findD(21));