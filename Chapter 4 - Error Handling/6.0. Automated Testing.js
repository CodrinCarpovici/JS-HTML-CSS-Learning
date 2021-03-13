//Automated tests

/*
    As programs get bigger automated test are used to check if 
    the changes made work fine, however as programss get bigger
    so do automated tests
*/

/*
    It gets to a point where automated tests are more convenient
    over manual tests
*/
function testBetween() {

    function assert(name, x) {
        if (!x)
            throw "Assertion failed: " + name;
    }

    assert("identical delimiters", between("a |b| c", "|", "|") == "b");
    assert("whole string", between("[[n]]", "[[", "]]") == "n");
    assert("reversed", between("]x[", "[", "]") == undefined);
    assert("missing end", between(" -->d ", "-->", "<--") == undefined);
    /* and so on */
    }