function power(base, exponent) {
    var result = 1;
    if (exponent === undefined)
        exponent = 2;
    for (var count = 0; count < exponent; count++)
        result *= base;
        return result;
    }
console.log(power(2, 2));
    