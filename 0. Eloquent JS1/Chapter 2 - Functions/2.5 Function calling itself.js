function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}
console.log(power(2, 4));

//Even though more elegant than the previous power function
//it is much slower and could case the stack to overflow given
//a large exponent

//Basic Rule: Worry about efficiency when you have to
//Replace elegant code for efficient one when it's needed
//Target the bits that slow down the program too much