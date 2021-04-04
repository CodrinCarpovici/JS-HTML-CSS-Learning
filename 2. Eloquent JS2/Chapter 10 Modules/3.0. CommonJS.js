/*
This example module provides a date-formatting function. It uses
two packages from NPM—ordinal to convert numbers to strings like
"1st" and "2nd", and date-names to get the English names for weekdays
and months. It exports a single function, formatDate, which takes a
Date object and a template string.
The template string may contain codes that direct the format, such
as YYYY for the full year and Do for the ordinal day of the month. You
could give it a string like "MMMM Do YYYY" to get output like “November
22nd 2017”.
*/

const ordinal = require("ordinal");
const { days, months } = require("date-names");

exports.formatDate = function (date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
};

/*
The module adds its interface function to exports so that modules
that depend on it get access to it. We could use the module like this:
*/

const { formatDate } = require("./format-date");

console.log(formatDate(new Date(2021, 9, 13), "dddd the Do"));
// → Friday the 13th

//We can define require, in its most minimal form, like this:

require.cache = Object.create(null);
function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name);
        let module = { exports: {} };
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require, module.exports, module);
    }
    return require.cache[name].exports;
}

/*
In this code, readFile is a made-up function that reads a file and
returns its contents as a string. Standard JavaScript provides no such
functionality—but different JavaScript environments, such as the browser
and Node.js, provide their own ways of accessing files. The example just
pretends that readFile exists.
*/

const {parse} = require("ini");

console.log(parse("x = 10\ny = 20"));
// → {x: "10", y: "20"}
