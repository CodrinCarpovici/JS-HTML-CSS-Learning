// Selective Catching

for(;;) {
    try {
        console.log(inputNumber() + 5);
        break;
    }
    //When explicitly handling an exception using catch, 
    //one has to be careful not to catch too much
    catch (e) {
        console.log("You did not input a number. Try again.");
    }
}

//The (;;) creates a loop that doesn't terminate on its own

