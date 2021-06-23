const {createServer} = require("http");
let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1>Hello!</h1>
        <p>You asked for <code>${request.url}</code></p>`);
    response.end();
});

server.listen(8000);
console.log("Listening! (port 8000)");

/*
If you run this script on your own machine, you can point your web
browser at http://localhost:8000/hello to make a request to your server.
It will respond with a small HTML page.
The function passed as argument to createServer is called every time
a client connects to the server. The request and response bindings are
objects representing the incoming and outgoing data. The first contains
information about the request, such as its url property, which tells us
to what URL the request was made.
So, when you open that page in your browser, it sends a request to
your own computer. This causes the server function to run and send
back a response, which you can then see in the browser.
To send something back, you call methods on the response object.
The first, writeHead, will write out the response headers (see Chapter
18). You give it the status code (200 for “OK” in this case) and an object
that contains header values. The example sets the Content-Type header
to inform the client that we’ll be sending back an HTML document.
Next, the actual response body (the document itself) is sent with
response.write. You are allowed to call this method multiple times if
you want to send the response piece by piece, for example to stream
data to the client as it becomes available. Finally, response.end signals
the end of the response.
The call to server.listen causes the server to start waiting for connections 
on port 8000. This is why you have to connect to localhost:8000
to speak to this server, rather than just localhost, which would use the
default port 80.
When you run this script, the process just sits there and waits. When
a script is listening for events—in this case, network connections—node
will not automatically exit when it reaches the end of the script. To
close it, press control-C.
A real web server usually does more than the one in the example—it
looks at the request’s method (the method property) to see what action
the client is trying to perform and looks at the request’s URL to find
out which resource this action is being performed on. We’ll see a more
advanced server later in this chapter.
To act as an HTTP client, we can use the request function in the
http module.
*/