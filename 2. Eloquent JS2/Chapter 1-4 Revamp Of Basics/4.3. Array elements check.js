let array = [];
for(let i = 0; i< array.length; i++) {
    let entry = array[i]; //do something with entry
}

//this can be written as

for (let entry of array) {
    console.log(`${entry.events.length} events.`)
}

/*
When a for loop looks like this, with the word of after a variable
definition, it will loop over the elements of the value given after of.
This works not only for arrays but also for strings and some other data
structures. 
*/