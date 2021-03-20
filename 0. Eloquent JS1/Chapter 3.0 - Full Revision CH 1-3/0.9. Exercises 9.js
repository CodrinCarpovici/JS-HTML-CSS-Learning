//Fibonacci series of any given number

function Fibonacci(range) {
    fibonacciS = [];
    fibonacciS[0] = 0;
    fibonacciS[1] = 1;

    for (var i = 0; i < range - 2; i++) {
        fibonacciS.push(fibonacciS[i] + fibonacciS[i+1]);
    }

    return fibonacciS;
}

console.log(Fibonacci(10));