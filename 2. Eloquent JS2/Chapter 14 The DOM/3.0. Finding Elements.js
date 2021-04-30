/*
If we want to get the href attribute of the link in that document,
we don’t want to say something like “Get the second child of the sixth
child of the document body”. It’d be better if we could say “Get the
first link in the document”. And we can
*/
let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

