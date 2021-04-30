/*
When dealing with a nested data structure like this one, recursive
functions are often useful. The following function scans a document for
text nodes containing a given string and returns true when it has found
one:
*/

function talksAbout(node, string) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        for (let child of node.childNodes) {
            if (talksAbout(child, string)) {
                return true;
            }
        }
        return false;
    } else if (node.nodeType == Node.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}

console.log(talksAbout(document.body, "book"));
// → true
