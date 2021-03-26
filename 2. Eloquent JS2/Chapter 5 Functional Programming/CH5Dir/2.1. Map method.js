import {SCRIPTS} from './scripts.js';

function map(array, transform) {
    let mapped = [];
    for(let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

/*
The map method transforms an array by applying a function to all of
its elements and building a new array from the returned values.
*/