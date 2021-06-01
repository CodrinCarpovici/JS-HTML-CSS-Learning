fetch("example/data.txt").then(response => {
    console.log(response.status);
    //->200
    console.log(response.headers.get("Content-Type"));
    //->text/plain
});
/*
Calling fetch returns a promise that resolves to a Response object
holding information about the server’s response, such as its status code
and its headers. The headers are wrapped in a Map-like object that
treats its keys (the header names) as case insensitive because header
names are not supposed to be case sensitive. This means headers.get
("Content-Type") and headers.get("content-TYPE") will return the same
value.

The first argument to fetch is the URL that should be requested.
When that URL doesn’t start with a protocol name (such as http:), it is
treated as relative, which means it is interpreted relative to the current
document. When it starts with a slash (/), it replaces the current path,
which is the part after the server name. When it does not, the part of
the current path up to and including its last slash character is put in
front of the relative URL.
*/

fetch("example/data.txt")
    .then(resp => resp.text())
    .then(text => console.log(text));
//->This is the content of data.txt

/*
A similar method, called json, returns a promise that resolves to the
value you get when parsing the body as JSON or rejects if it’s not valid
JSON.
By default, fetch uses the GET method to make its request and does
not include a request body. You can configure it differently by passing
an object with extra options as a second argument. For example, this
request tries to delete example/data.txt:
*/

fetch("example/data.txt", {method: "DELETE"}).then(resp => {
    console.log(resp.status);
    //->405
});

//The 405 status code means “method not allowed”, an HTTP server’s
//way of saying “I can’t do that”.

/*
To add a request body, you can include a body option. To set headers,
there’s the headers option. For example, this request includes a Range
header, which instructs the server to return only part of a response.
*/

fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
    .then(resp => resp.text())
    .then(console.log);
//->the content

/*
The browser will automatically add some request headers, such as
“Host” and those needed for the server to figure out the size of the
body. But adding your own headers is often useful to include things
such as authentication information or to tell the server which file format
you’d like to receive.
*/