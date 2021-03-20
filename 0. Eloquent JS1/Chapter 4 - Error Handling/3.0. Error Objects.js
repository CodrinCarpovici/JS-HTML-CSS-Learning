try {
    console.log(Sasquatch);
}
catch (error) {
    console.log("Caught: " + error.message);
}

throw new Error("Wolf!"); //using new keyword and Error constructor
//giving the message an argument
