const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

/*
bad way to do it as money would dissapear when the first exception gets 
raised.

function transfer(from, amount) {
    if (accounts[from] < amount) return;
*/
/*
 A finally block says “no
matter what happens, run this code after trying to run the code in the
try block.”    
*/

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
}

/*
This version of the function tracks its progress, and if, when leaving, 
it notices that it was aborted at a point where it had created an
inconsistent program state, it repairs the damage it did.
*/

/*
Writing programs that operate reliably even when exceptions pop up
in unexpected places is hard. Many people simply don’t bother, and
because exceptions are typically reserved for exceptional circumstances,
the problem may occur so rarely that it is never even noticed. Whether
that is a good thing or a really bad thing depends on how much damage
the software will do when it fails.
*/