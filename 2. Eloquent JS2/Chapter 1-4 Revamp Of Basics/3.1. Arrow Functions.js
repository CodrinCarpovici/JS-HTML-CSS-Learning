//this input(the parameters) produces this result (the body)
const power = (base,exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

//when there is only one paramenter the parenteshis can be ommited
const square1 = (x) => {return x*x};
const square2 = x => x*x;

//when an arrow function has no parameters, its parameter list is an empty set
//of parantheses
const horn = () => {console.log("Toot")};


/*
Arrow functions were added in 2015, mostly to make it possible to write 
small function expressions in a less verbose way.
*/