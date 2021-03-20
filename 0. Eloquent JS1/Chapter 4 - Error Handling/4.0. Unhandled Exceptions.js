/*
    When an exception makes it all the way to the bottom
    without getting caught, it gets handled by the environment
*/

/*
    For programmer mistakes or problems that the program cannot possibly
    handle, just letting the error go through is often okay. 
    An unhandled exception is a reasonable way to signal a broken program, 
    and many JavaScript environments (such as the “debugging” tools 
    included in modern browsers) allow you to inspect these exceptions 
    to see which function calls were on the stack when they occurred, 
    which can be very helpful when trying to find the problem.
*/