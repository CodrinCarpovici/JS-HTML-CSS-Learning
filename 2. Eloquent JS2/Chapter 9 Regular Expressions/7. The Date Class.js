console.log(new Date());

console.log(new Date(2009, 11, 9));

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

//JavaScript uses a convention where month numbers start at zero (so
//December is 11), yet day numbers start at one

/*
The last four arguments (hours, minutes, seconds, and milliseconds)
are optional and taken to be zero when not given.
*/

console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
console.log(new Date(1387407600000));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)

function getDate(string) {
    let [_, month, day, year] =
        /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

/*
The _ (underscore) binding is ignored and used only to skip the full
match element in the array returned by exec.
*/