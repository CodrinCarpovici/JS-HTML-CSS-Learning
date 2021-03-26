import {SCRIPTS} from './scripts.js';

function filter(array, test) {
    let passed =[];
    for (let element of array) {
        if(test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));

//filter is a standard method, theway to use it is as follows
console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]