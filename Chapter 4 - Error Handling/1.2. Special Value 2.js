function lastElement(array) {
    if (array.length > 0)
        return array[array.length -1];
    else 
        return undefined;
}

console.log(lastElement([1, 2, undefined]));

/*
    The 2 main issues with returning a special value to check for errors:
    1. What if the function can return any kind of value
    2. Returning a value can lead to a whole lot of cluter sometimes
*/